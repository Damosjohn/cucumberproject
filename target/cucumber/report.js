$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/techfioslogin.feature");
formatter.feature({
  "line": 2,
  "name": "Techfios login fuctionality validation",
  "description": "",
  "id": "techfios-login-fuctionality-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Loginfeature"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 5,
      "value": "#@Scenario @smoke"
    },
    {
      "line": 6,
      "value": "#Scenario: Login with valid credentials"
    },
    {
      "line": 7,
      "value": "#"
    },
    {
      "line": 8,
      "value": "#Given User is login on techfiospage"
    },
    {
      "line": 9,
      "value": "#When User enters username value as \"demo@techfios.com\""
    },
    {
      "line": 10,
      "value": "#When User enters password value as \"abc123\""
    },
    {
      "line": 11,
      "value": "#And User clicks on signin button"
    },
    {
      "line": 12,
      "value": "#Then User should landin on dashboard page"
    }
  ],
  "line": 14,
  "name": "Login with invalid username",
  "description": "",
  "id": "techfios-login-fuctionality-validation;login-with-invalid-username",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@OtherScanario"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User enters username value as\"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters password value as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User clicks on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should notland on dashboardpage",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "techfios-login-fuctionality-validation;login-with-invalid-username;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 22,
      "id": "techfios-login-fuctionality-validation;login-with-invalid-username;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc124"
      ],
      "line": 23,
      "id": "techfios-login-fuctionality-validation;login-with-invalid-username;;2"
    },
    {
      "cells": [
        "demo1@techfios.com",
        "abc123"
      ],
      "line": 24,
      "id": "techfios-login-fuctionality-validation;login-with-invalid-username;;3"
    },
    {
      "cells": [
        "demo1@techfios.com",
        "abc124"
      ],
      "line": 25,
      "id": "techfios-login-fuctionality-validation;login-with-invalid-username;;4"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123"
      ],
      "line": 26,
      "id": "techfios-login-fuctionality-validation;login-with-invalid-username;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2650255300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is login on techfiospage",
  "keyword": "Given "
});
formatter.match({
  "location": "TechfiosStepDefiniton.user_is_login_on_techfiospage()"
});
formatter.result({
  "duration": 1207878200,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Login with invalid username",
  "description": "",
  "id": "techfios-login-fuctionality-validation;login-with-invalid-username;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@Loginfeature"
    },
    {
      "line": 13,
      "name": "@OtherScanario"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User enters username value as\"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters password value as \"abc124\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User clicks on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should notland on dashboardpage",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 30
    }
  ],
  "location": "TechfiosStepDefiniton.user_enters_username_value_as1(String)"
});
formatter.result({
  "duration": 4320000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc124",
      "offset": 31
    }
  ],
  "location": "TechfiosStepDefiniton.user_enters_password_value_as(String)"
});
formatter.result({
  "duration": 97424100,
  "status": "passed"
});
formatter.match({
  "location": "TechfiosStepDefiniton.user_clicks_on_signin_button()"
});
formatter.result({
  "duration": 1321904900,
  "status": "passed"
});
formatter.match({
  "location": "TechfiosStepDefiniton.user_should_notland_on_dashboardpage()"
});
formatter.result({
  "duration": 22800,
  "status": "passed"
});
formatter.after({
  "duration": 723742500,
  "status": "passed"
});
formatter.before({
  "duration": 1484717400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is login on techfiospage",
  "keyword": "Given "
});
formatter.match({
  "location": "TechfiosStepDefiniton.user_is_login_on_techfiospage()"
});
formatter.result({
  "duration": 1018879200,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Login with invalid username",
  "description": "",
  "id": "techfios-login-fuctionality-validation;login-with-invalid-username;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@Loginfeature"
    },
    {
      "line": 13,
      "name": "@OtherScanario"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User enters username value as\"demo1@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters password value as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User clicks on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should notland on dashboardpage",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo1@techfios.com",
      "offset": 30
    }
  ],
  "location": "TechfiosStepDefiniton.user_enters_username_value_as1(String)"
});
formatter.result({
  "duration": 81200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 31
    }
  ],
  "location": "TechfiosStepDefiniton.user_enters_password_value_as(String)"
});
formatter.result({
  "duration": 88516100,
  "status": "passed"
});
formatter.match({
  "location": "TechfiosStepDefiniton.user_clicks_on_signin_button()"
});
formatter.result({
  "duration": 1180921400,
  "status": "passed"
});
formatter.match({
  "location": "TechfiosStepDefiniton.user_should_notland_on_dashboardpage()"
});
formatter.result({
  "duration": 34100,
  "status": "passed"
});
formatter.after({
  "duration": 723456400,
  "status": "passed"
});
formatter.before({
  "duration": 1478137800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is login on techfiospage",
  "keyword": "Given "
});
formatter.match({
  "location": "TechfiosStepDefiniton.user_is_login_on_techfiospage()"
});
formatter.result({
  "duration": 1101491500,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Login with invalid username",
  "description": "",
  "id": "techfios-login-fuctionality-validation;login-with-invalid-username;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@Loginfeature"
    },
    {
      "line": 13,
      "name": "@OtherScanario"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User enters username value as\"demo1@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters password value as \"abc124\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User clicks on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should notland on dashboardpage",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo1@techfios.com",
      "offset": 30
    }
  ],
  "location": "TechfiosStepDefiniton.user_enters_username_value_as1(String)"
});
formatter.result({
  "duration": 86400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc124",
      "offset": 31
    }
  ],
  "location": "TechfiosStepDefiniton.user_enters_password_value_as(String)"
});
formatter.result({
  "duration": 80653700,
  "status": "passed"
});
formatter.match({
  "location": "TechfiosStepDefiniton.user_clicks_on_signin_button()"
});
formatter.result({
  "duration": 1111400300,
  "status": "passed"
});
formatter.match({
  "location": "TechfiosStepDefiniton.user_should_notland_on_dashboardpage()"
});
formatter.result({
  "duration": 50300,
  "status": "passed"
});
formatter.after({
  "duration": 695545400,
  "status": "passed"
});
formatter.before({
  "duration": 1456644000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is login on techfiospage",
  "keyword": "Given "
});
formatter.match({
  "location": "TechfiosStepDefiniton.user_is_login_on_techfiospage()"
});
formatter.result({
  "duration": 1158118800,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Login with invalid username",
  "description": "",
  "id": "techfios-login-fuctionality-validation;login-with-invalid-username;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@Loginfeature"
    },
    {
      "line": 13,
      "name": "@OtherScanario"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User enters username value as\"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters password value as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User clicks on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should notland on dashboardpage",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 30
    }
  ],
  "location": "TechfiosStepDefiniton.user_enters_username_value_as1(String)"
});
formatter.result({
  "duration": 152400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 31
    }
  ],
  "location": "TechfiosStepDefiniton.user_enters_password_value_as(String)"
});
formatter.result({
  "duration": 87406700,
  "status": "passed"
});
formatter.match({
  "location": "TechfiosStepDefiniton.user_clicks_on_signin_button()"
});
formatter.result({
  "duration": 1315306300,
  "status": "passed"
});
formatter.match({
  "location": "TechfiosStepDefiniton.user_should_notland_on_dashboardpage()"
});
formatter.result({
  "duration": 132600,
  "status": "passed"
});
formatter.after({
  "duration": 724094400,
  "status": "passed"
});
});