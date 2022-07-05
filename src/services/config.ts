const spacesUrl = 'https://7669j83pul.execute-api.us-east-1.amazonaws.com/prod/';

export const config = {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_L1PiMHQmE',
    APP_CLIENT_ID: '4dgumoreusoku2jq7idjsoaeq7',
    IDENTITY_POOL_ID: 'us-east-1:df39766b-d3fc-43d5-992e-8dd697a716ab',
    SPACES_PHOTOS_BUCKET: 'spaces-photos-1239b3726ccd',
    api: {
        baseUrl: spacesUrl,
        spacesUrl: `${spacesUrl}spaces`
    }
} 