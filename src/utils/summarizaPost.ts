const summarizePost = (content: string, maxLength: number) => {
  return content?.substring(0, maxLength);
};

export default summarizePost;
