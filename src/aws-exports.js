const awsmobile = {
    "aws_project_region": "us-east-1",
    "aws_cognito_region": "us-east-1",
    "aws_user_pools_id": "us-east-1_BViNLPAZW",
    "aws_user_pools_web_client_id": "7l58broj906ds4bmep13hf1iev",
    "oauth": {
        "domain": "digital-application-new.auth.us-east-1.amazoncognito.com",
        "scope": [
            "phone",
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "http://localhost:4200/login",
        "redirectSignOut": "http://localhost:4200/login",
        "responseType": "code"
    }
};


export default awsmobile;