import React from "react";

const PageWrapper = ({ children }) => {
    return (
        // <motion.div>
        //     {/*// className="bg-black font-NeueHaas w-screen h-full flex"*/}
        //     {/*// initial={{ opacity: 0 }}*/}
        //     {/*// animate={{ opacity: 1 }}*/}
        //     {/*// >*/}
        //     <AnimatePresence exitBeforeEnter>
        //         <SimpleDivAnimation>
        //             {children}
        //         </SimpleDivAnimation>
        //     </AnimatePresence>
        // </motion.div>
        <React.Fragment>{children}</React.Fragment>
    );
};

export default PageWrapper;