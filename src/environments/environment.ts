// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'http://localhost:4000/api',
  // cognito: {
  //   userPoolId: 'us-east-1_BViNLPAZW',
  //   userPoolWebClientId: '7l58broj906ds4bmep13hf1iev',
  // },


  // cognito: {
  //   userPoolId: 'us-east-1_EsvrDQlkM',
  //   userPoolWebClientId: '4gcb3jnanjj3gvbsdn1hcbpt3',
  //   "oauth": {
  //     "domain": "pool-application-test.auth.us-east-1.amazoncognito.com",
  //     "redirectSignIn": "http://localhost:4200/login",
  //     "redirectSignOut": "http://localhost:4200/login",
  //     "responseType": "code"
  // }
  // },

  cognito: {
    identityPoolId: "",
    region: "us-east-1",
    userPoolId: "us-east-1_EsvrDQlkM",
    userPoolWebClientId: "4gcb3jnanjj3gvbsdn1hcbpt3",
    
    mandatorySignIn: false,
    
    oauth: {
      domain: "pool-application-test.auth.us-east-1.amazoncognito.com",
      scope: ['phone', 'email', 'profile', 'openid'],
      redirectSignIn: "http://localhost:4201/dashboard",
      redirectSignOut: "http://localhost:4201/auth",
      responseType: 'code',
      options: {
        AdvancedSecurityDataCollectionFlag: false
      }
    },
    },
    Storage: {
    bucket: "",
    region: "us-east-1"
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
