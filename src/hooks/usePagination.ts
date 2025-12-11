import { useEffect, useState, useRef } from 'react';

interface PaginationConfig {
    pageHeight: number;
    headerHeight: number;
    footerHeight: number;
}

export function usePagination<T>(
    items: T[],
    config: PaginationConfig
) {
    const [pages, setPages] = useState<T[][]>([]);
    const [isCalculating, setIsCalculating] = useState(true);
    const measureRef = useRef<HTMLDivElement>(null);

    const availableHeight = config.pageHeight - config.headerHeight - config.footerHeight;

    useEffect(() => {
        if (!measureRef.current) return;

        const calculatePages = () => {
            const tempPages: T[][] = [];
            let currentPage: T[] = [];
            let currentHeight = 0;

            const children = Array.from(measureRef.current!.children);

            children.forEach((child, index) => {
                const elementHeight = child.getBoundingClientRect().height;

                if (currentHeight + elementHeight > availableHeight && currentPage.length > 0) {
                    tempPages.push([...currentPage]);
                    currentPage = [items[index]];
                    currentHeight = elementHeight;
                } else {
                    currentPage.push(items[index]);
                    currentHeight += elementHeight;
                }
            });

            if (currentPage.length > 0) {
                tempPages.push(currentPage);
            }

            setPages(tempPages);
            setIsCalculating(false);
        };

        const timer = setTimeout(calculatePages, 100);

        return () => clearTimeout(timer);
    }, [items, availableHeight]);

    return { pages, isCalculating, measureRef };
}