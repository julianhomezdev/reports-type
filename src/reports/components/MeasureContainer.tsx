import { forwardRef } from 'react';

interface MeasureContainerProps {
    children: React.ReactNode;
}

const MeasureContainer = forwardRef<HTMLDivElement, MeasureContainerProps>(
    ({ children }, ref) => {
        return (
            <div
                ref={ref}
                style={{
                    position: 'absolute',
                    visibility: 'hidden',
                    pointerEvents: 'none',
                    top: 0,
                    left: 0,
                    width: '100%'
                }}
            >
                {children}
            </div>
        );
    }
);

MeasureContainer.displayName = 'MeasureContainer';

export default MeasureContainer;