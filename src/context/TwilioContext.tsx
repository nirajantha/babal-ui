// src/context/TwilioContext.tsx
import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import { VOICE_TOKEN } from "../components/twilio/Query";
import { Call, Device as TwilioDevice } from "@twilio/voice-sdk";
import { getTwilioToken } from "../services/TwilioService";
console.log("Voice token>>>", VOICE_TOKEN);
interface TwilioContextType {
  device: TwilioDevice | null;
  connect: (phoneNumber: string) => void;
  disconnect: () => void;
  status: string;
}

const TwilioContext = createContext<TwilioContextType | undefined>(undefined);

interface TwilioProviderProps {
  children: ReactNode;
}

const TwilioProvider: React.FC<TwilioProviderProps> = ({ children }) => {
  const [device, setDevice] = useState<TwilioDevice | null>(null);
  const [status, setStatus] = useState<string>("disconnected");
  const [currentCall, setCurrentCall] = useState<Call | null>(null);

  useEffect(() => {
    const setupDevice = async () => {
      const token = await getTwilioToken();
      const device = new TwilioDevice(token) as any; // Explicitly cast to 'any' to bypass type issues
      console.log("Twilio Device:", device);
      console.log("Twilio token:", token);
      setDevice(device);

      device.on("registered", () => setStatus("registered"));
      device.on("error", (error: any) => console.error("Twilio Error:", error));
      device.on("connect", () => setStatus("connected"));
      device.on("disconnect", () => setStatus("disconnected"));
    };

    setupDevice();
  }, []);

  const connect = (phoneNumber: string) => {
    if (device) {
      device
        .connect({ params: { To: phoneNumber } })
        .then((connection: Call) => {
          setCurrentCall(connection);
          setStatus("connected");

          // If 'on' or 'once' are not available, use other mechanisms
          connection.disconnect = () => setStatus("disconnected"); // Example if such a property exists
        })
        .catch((error: any) =>
          console.error("Twilio Connection Error:", error)
        );
    }
  };

  const disconnect = () => {
    if (currentCall) {
      currentCall.disconnect();
      setCurrentCall(null);
    } else if (device) {
      device.disconnectAll();
    }
  };

  return (
    <TwilioContext.Provider value={{ device, connect, disconnect, status }}>
      {children}
    </TwilioContext.Provider>
  );
};

const useTwilio = () => {
  const context = useContext(TwilioContext);
  if (!context) {
    throw new Error("useTwilio must be used within a TwilioProvider");
  }
  return context;
};

export { TwilioProvider, useTwilio };
