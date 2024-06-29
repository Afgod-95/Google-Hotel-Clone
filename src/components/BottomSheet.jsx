import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './BottomSheet.css';

const BottomSheet = ({ isOpen, onClose, children }) => {

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="backdrop"
          onClick={onClose}
        >
          <motion.div
            className="bottom-sheet"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="handle" onClick={onClose}/>
            <div className="content">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BottomSheet;
