import { useState } from "react";

/**
 * Custom Hook to show/hide a JSX Element or component
 * @param isOpenByDefault {boolean} - Sets initial isOpen state
 * @returns boolean, open function, close function, toggle function
 * 
 * Usage inside a component ->
 * 
 * Step 1: Import and call function
 * `const { isOpen, open, close } = useDisclosure();`
 * 
 * Step 2: Add the trigger
 * `<button onClick={open}>Open Modal</button>`
 * 
 * Step 3: Add state on the element that is hidden/visible
 * `<Modal isOpen={isOpen} close={close}>Modal Content</Modal>`
 */
 const useDisclosure = (isOpenByDefault = false) => {
   const [isOpen, setIsOpen] = useState(isOpenByDefault);
 
   const open = () => setIsOpen(true);
 
   const close = () => setIsOpen(false);
 
   const toggle = () => setIsOpen(!isOpen);
 
   return { isOpen, open, close, toggle }
 }
 
 export default useDisclosure;