const handleError = (e: any) => {
  if (e instanceof Error) return e.message;
  else return "Something went wrong.";
}

export default handleError;