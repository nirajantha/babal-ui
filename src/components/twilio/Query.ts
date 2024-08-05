import { gql } from "@apollo/client";

export const VOICE_TOKEN = gql`
  query getVoiceToken {
    getVoiceToken {
      status
      error {
        code
        message
        errorKey
      }
      data {
        voiceToken
      }
    }
  }
`;
