const config = {
    s3: {
      REGION: "us-west-2",
      BUCKET: "bucket-notes-app-upload",
    },
    apiGateway: {
      REGION: "us-west-2",
      URL: "https://chp6foq5gj.execute-api.us-west-2.amazonaws.com/dev",
    },
    cognito: {
      REGION: "us-west-2",
      USER_POOL_ID: "us-west-2_ZCzZ4p112",
      APP_CLIENT_ID: "4a3g8sekhrm2f9ugpirdjn7qn6",
      IDENTITY_POOL_ID: "us-west-2:1cb2c585-5ea1-453c-be19-ced30aaf8a40",
    },
  };
  
  export default config;