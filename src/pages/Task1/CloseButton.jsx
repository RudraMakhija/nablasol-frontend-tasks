const CloseButton = () => {
  const handleClose = () => {console.log('form closed')};

  return (
    <button className="text-gray-500 text-xl cursor-pointer" onClick={handleClose} >×</button>
  );
};

export default CloseButton;