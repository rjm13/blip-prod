export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "blipprodcc14f13d": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        },
        "userPoolGroups": {
            "AdminGroupRole": "string",
            "PremiumGroupRole": "string",
            "StudentGroupRole": "string",
            "BasicGroupRole": "string"
        }
    },
    "api": {
        "blipprod": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        },
        "AdminQueries": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    },
    "storage": {
        "s325c708cf": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "function": {
        "AdminQueriesda6bc0db": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    }
}