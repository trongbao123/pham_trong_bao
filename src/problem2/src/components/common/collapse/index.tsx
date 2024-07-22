import React, { useCallback, useState } from 'react';
import './index.css';
import ButtonCustom from '../button';
import DownIcon from "../../../assets/images/downicon.svg";
import { motion, AnimatePresence } from 'framer-motion';
type CollapseProps = {
    children?: React.ReactNode,
    width?: string | number,
    defaultOpen?: boolean,
    title?: string,
    className?: string,
    [key: string]: any
}
const Collapse: React.FC<CollapseProps> = ({
    children,
    width = "50%",
    defaultOpen = false,
    title,
    className,
    ...rest
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);

    const handleToggle = useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen]);

    const collapseVariants = {
        hidden: { height: 0, opacity: 0, transition: { duration: 0.3 } },
        visible: { height: 'auto', opacity: isOpen ? 1 : 0, transition: { duration: 0.3 } },
    };
    return (
        <div
            className={`card-collapse ${className}`}
            style={{ width: width }}
        >
            <h2 className="card-header-collapse" id="headingNine">
                <ButtonCustom
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseNine"
                    aria-expanded="false"
                    aria-controls="collapseNine"
                    onClick={handleToggle}
                    {...rest}
                >
                    <span className='collapse-title'> {title}</span>
                    <img
                        src={DownIcon}
                        alt="down icon"
                        className={isOpen ? "open" : "close"}
                    />
                </ButtonCustom>
            </h2>
            <AnimatePresence>
                <motion.div
                    variants={collapseVariants}
                    initial="hidden"
                    animate="visible"
                    id="collapseNine"
                    className={isOpen ? "accordion-collapse show" : "accordion-collapse collapse"}
                    aria-labelledby="headingNine"
                    data-bs-parent="#accordion3"
                >
                    <div className="card-body-collapse">
                        {children}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>

    )
}

export default Collapse;