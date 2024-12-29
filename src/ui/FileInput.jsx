function FileInput({ setSelectedFile }) {
  const fileSelectedHandler = (e) => {
    setSelectedFile(e.target.value);
  };
  return <input type="file" onChange={fileSelectedHandler} />;
}

export default FileInput;
