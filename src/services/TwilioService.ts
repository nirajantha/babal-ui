import axios from "axios";

const getTwilioToken = async () => {
  const response = await axios.get("/api/twilio-token");
  return response.data.token;
};

export { getTwilioToken };
