import React, { ReactNode } from "react";
import { Device as TwilioDevice } from "@twilio/voice-sdk";
interface TwilioContextType {
    device: TwilioDevice | null;
    connect: (phoneNumber: string) => void;
    disconnect: () => void;
    status: string;
}
interface TwilioProviderProps {
    children: ReactNode;
}
declare const TwilioProvider: React.FC<TwilioProviderProps>;
declare const useTwilio: () => TwilioContextType;
export { TwilioProvider, useTwilio };
