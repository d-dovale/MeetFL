/**
 * Models generated from "Model and Storage" and models extracted from services.
 * To generate entity use syntax:
 * Apperyio.EntityAPI("<model_name>[.<model_field>]");
 */
export var models = {
    "IUserInfo_0": {
        "type": "object",
        "properties": {
            "firstName": {
                "type": "string"
            },
            "zipCode": {
                "type": "string"
            },
            "id": {
                "type": "number"
            },
            "organizationId": {
                "type": "number"
            },
            "address2": {
                "type": "string"
            },
            "stateId": {
                "type": "number"
            },
            "phoneNumber": {
                "type": "string"
            },
            "city": {
                "type": "string"
            },
            "lastName": {
                "type": "string"
            },
            "countryId": {
                "type": "number"
            },
            "email": {
                "type": "string"
            },
            "address1": {
                "type": "string"
            }
        }
    },
    "IOrganizationInfo_toDelete": {
        "type": "object",
        "properties": {
            "organizationId": {
                "type": "number"
            },
            "lastName": {
                "type": "string"
            },
            "branchId": {
                "type": "number"
            },
            "organizationName": {
                "type": "string"
            },
            "firstName": {
                "type": "string"
            },
            "branchName": {
                "type": "string"
            }
        }
    },
    "User": {
        "type": "object",
        "properties": {
            "name": {
                "type": "string"
            }
        }
    },
    "userr": {
        "type": "object",
        "properties": {
            "email": {
                "type": "string"
            },
            "lastName": {
                "type": "string"
            },
            "firstName": {
                "type": "string"
            },
            "phoneNumber": {
                "type": "string"
            },
            "city": {
                "type": "string"
            },
            "stateId": {
                "type": "number"
            },
            "zipCode": {
                "type": "string"
            },
            "countryId": {
                "type": "number"
            },
            "id": {
                "type": "number"
            },
            "organizationId": {
                "type": "number"
            },
            "address2": {
                "type": "string"
            },
            "address1": {
                "type": "string"
            }
        }
    },
    "IOrganizationInfo_toDelete_1": {
        "type": "object",
        "properties": {
            "organizationName": {
                "type": "string"
            },
            "branchId": {
                "type": "number"
            },
            "organizationId": {
                "type": "number"
            },
            "lastName": {
                "type": "string"
            },
            "branchName": {
                "type": "string"
            },
            "firstName": {
                "type": "string"
            }
        }
    },
    "User_0": {
        "type": "object",
        "properties": {
            "name": {
                "type": "string"
            }
        }
    },
    "IOrganizationInfo_0": {
        "type": "object",
        "properties": {
            "county": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string"
                    },
                    "id": {
                        "type": "string"
                    }
                }
            },
            "description": {
                "type": "string"
            },
            "name": {
                "type": "string"
            },
            "email": {
                "type": "string"
            },
            "id": {
                "type": "number"
            },
            "address1": {
                "type": "string"
            },
            "state": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string"
                    },
                    "id": {
                        "type": "string"
                    }
                }
            }
        }
    },
    "IUserInfo": {
        "type": "object",
        "properties": {
            "firstName": {
                "type": "string"
            },
            "id": {
                "type": "number"
            },
            "phoneNumber": {
                "type": "string"
            },
            "stateId": {
                "type": "number"
            },
            "address2": {
                "type": "string"
            },
            "organizationId": {
                "type": "number"
            },
            "countryId": {
                "type": "number"
            },
            "address1": {
                "type": "string"
            },
            "zipCode": {
                "type": "string"
            },
            "city": {
                "type": "string"
            },
            "email": {
                "type": "string"
            },
            "lastName": {
                "type": "string"
            }
        }
    },
    "Any": {
        "type": "any"
    },
    "Function": {
        "type": "Function"
    },
    "Promise": {
        "type": "Promise"
    },
    "Observable": {
        "type": "Observable"
    },
    "IOrganizationInfo": {
        "type": "object",
        "properties": {
            "email": {
                "type": "string"
            },
            "id": {
                "type": "number"
            },
            "name": {
                "type": "string"
            },
            "county": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string"
                    },
                    "id": {
                        "type": "string"
                    }
                }
            },
            "state": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "string"
                    },
                    "name": {
                        "type": "string"
                    }
                }
            },
            "address1": {
                "type": "string"
            },
            "description": {
                "type": "string"
            }
        }
    },
    "String": {
        "type": "string"
    },
    "IOrganizationInfo_1": {
        "type": "object",
        "properties": {
            "name": {
                "type": "string"
            },
            "county": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string"
                    },
                    "id": {
                        "type": "string"
                    }
                }
            },
            "address1": {
                "type": "string"
            },
            "id": {
                "type": "number"
            },
            "email": {
                "type": "string"
            },
            "description": {
                "type": "string"
            },
            "state": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "string"
                    },
                    "name": {
                        "type": "string"
                    }
                }
            }
        }
    },
    "Boolean": {
        "type": "boolean"
    },
    "Number": {
        "type": "number"
    },
    "IOrganizationInfo_toDelete_0": {
        "type": "object",
        "properties": {
            "branchName": {
                "type": "string"
            },
            "branchId": {
                "type": "number"
            },
            "firstName": {
                "type": "string"
            },
            "lastName": {
                "type": "string"
            },
            "organizationId": {
                "type": "number"
            },
            "organizationName": {
                "type": "string"
            }
        }
    },
    "userInfo": {
        "type": "object",
        "properties": {
            "jobID": {
                "type": "string"
            },
            "firstName": {
                "type": "string"
            },
            "position": {
                "type": "string"
            },
            "lastName": {
                "type": "string"
            },
            "city": {
                "type": "string"
            },
            "username": {
                "type": "string"
            },
            "phoneNumber": {
                "type": "string"
            }
        }
    },
    "SignupService": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/db/users"
            },
            "method": {
                "type": "string",
                "default": "post"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "password": {
                                "type": "string"
                            },
                            "username": {
                                "type": "string"
                            }
                        }
                    },
                    "query": {
                        "type": "object",
                        "properties": {}
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "Content-Type": {
                                "type": "string",
                                "default": "application/json"
                            },
                            "X-Appery-Database-Id": {
                                "type": "string",
                                "default": "{SecuritySettings.database_id}"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "_id": {
                                "type": "string"
                            },
                            "username": {
                                "type": "string"
                            },
                            "_updatedAt": {
                                "type": "string"
                            },
                            "_createdAt": {
                                "type": "string"
                            },
                            "sessionToken": {
                                "type": "string"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "UpdateProfileService": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": ""
            },
            "method": {
                "type": "string",
                "default": "put"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "query": {
                        "type": "object",
                        "properties": {}
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "Content-Type": {
                                "type": "string",
                                "default": "application/json"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            },
            "echo": {
                "type": "string",
                "default": "{\n    \"status\": \"success\"\n}"
            }
        }
    },
    "LoginDB_Userdisplay_read_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/db/collections/Userdisplay/{_id}"
            },
            "method": {
                "type": "string",
                "default": "get"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "query": {
                        "type": "object",
                        "properties": {
                            "_id": {
                                "type": "string"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Session-Token": {
                                "type": "string"
                            },
                            "X-Appery-Database-Id": {
                                "type": "string",
                                "default": "{LoginDB_settings.database_id}"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "$": {
                                "type": "object",
                                "properties": {
                                    "jobID": {
                                        "type": "string"
                                    },
                                    "city": {
                                        "type": "string"
                                    },
                                    "position": {
                                        "type": "string"
                                    },
                                    "_createdAt": {
                                        "type": "string"
                                    },
                                    "phoneNumber": {
                                        "type": "string"
                                    },
                                    "_id": {
                                        "type": "string"
                                    },
                                    "acl": {
                                        "type": "object",
                                        "properties": {
                                            "*": {
                                                "type": "object",
                                                "properties": {
                                                    "write": {
                                                        "type": "boolean",
                                                        "default": true
                                                    },
                                                    "read": {
                                                        "type": "boolean",
                                                        "default": true
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "_updatedAt": {
                                        "type": "string"
                                    },
                                    "lastName": {
                                        "type": "string"
                                    },
                                    "firstName": {
                                        "type": "string"
                                    },
                                    "username": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "LoginDB_login_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/db/login"
            },
            "method": {
                "type": "string",
                "default": "post"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "username": {
                                "type": "string"
                            },
                            "password": {
                                "type": "string"
                            }
                        }
                    },
                    "query": {
                        "type": "object",
                        "properties": {}
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Database-Id": {
                                "type": "string",
                                "default": "{LoginDB_settings.database_id}"
                            },
                            "Content-Type": {
                                "type": "string",
                                "default": "application/json"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "_id": {
                                "type": "string"
                            },
                            "sessionToken": {
                                "type": "string"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "LoginDB_Userdisplay_query_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/db/collections/Userdisplay"
            },
            "method": {
                "type": "string",
                "default": "get"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "query": {
                        "type": "object",
                        "properties": {
                            "where": {
                                "type": "string"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Database-Id": {
                                "type": "string",
                                "default": "{LoginDB_settings.database_id}"
                            },
                            "X-Appery-Session-Token": {
                                "type": "string"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "$": {
                                "type": "array",
                                "items": [{
                                    "type": "object",
                                    "properties": {
                                        "jobID": {
                                            "type": "string"
                                        },
                                        "username": {
                                            "type": "string"
                                        },
                                        "phoneNumber": {
                                            "type": "string"
                                        },
                                        "acl": {
                                            "type": "object",
                                            "properties": {
                                                "*": {
                                                    "type": "object",
                                                    "properties": {
                                                        "write": {
                                                            "type": "boolean",
                                                            "default": true
                                                        },
                                                        "read": {
                                                            "type": "boolean",
                                                            "default": true
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "position": {
                                            "type": "string"
                                        },
                                        "_updatedAt": {
                                            "type": "string"
                                        },
                                        "_createdAt": {
                                            "type": "string"
                                        },
                                        "city": {
                                            "type": "string"
                                        },
                                        "_id": {
                                            "type": "string"
                                        },
                                        "firstName": {
                                            "type": "string"
                                        },
                                        "lastName": {
                                            "type": "string"
                                        }
                                    }
                                }]
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "GetProfileService": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": ""
            },
            "method": {
                "type": "string",
                "default": "post"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "query": {
                        "type": "object",
                        "properties": {}
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "Content-Type": {
                                "type": "string",
                                "default": "application/json"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "SignUp": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/proxy/tunnel"
            },
            "method": {
                "type": "string",
                "default": "post"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "lastName": {
                                "type": "string"
                            },
                            "username": {
                                "type": "string"
                            },
                            "firstName": {
                                "type": "string"
                            },
                            "position": {
                                "type": "string"
                            },
                            "jobID": {
                                "type": "string"
                            }
                        }
                    },
                    "query": {
                        "type": "object",
                        "properties": {}
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "Content-Type": {
                                "type": "string",
                                "default": "application/json"
                            },
                            "X-Appery-Database-Id": {
                                "type": "string",
                                "default": "{SecuritySettings.database_id}"
                            },
                            "appery-transformation": {
                                "type": "string",
                                "default": "checkTunnel"
                            },
                            "appery-rest": {
                                "type": "string",
                                "default": "d92473ad-11d6-4283-9489-53f487d173a9"
                            },
                            "appery-proxy-url": {
                                "type": "string",
                                "default": "https://api.appery.io/rest/1/db/collections/Userdisplay"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "_updatedAt": {
                                "type": "string"
                            },
                            "username": {
                                "type": "string"
                            },
                            "_createdAt": {
                                "type": "string"
                            },
                            "sessionToken": {
                                "type": "string"
                            },
                            "_id": {
                                "type": "string"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "LogoutService": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/db/logout"
            },
            "method": {
                "type": "string",
                "default": "get"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "query": {
                        "type": "object",
                        "properties": {}
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Database-Id": {
                                "type": "string",
                                "default": "{SecuritySettings.database_id}"
                            },
                            "X-Appery-Session-Token": {
                                "type": "string"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "LoginDB_bugReports_create_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/db/collections/bugReports"
            },
            "method": {
                "type": "string",
                "default": "post"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "acl": {
                                "type": "object",
                                "properties": {
                                    "*": {
                                        "type": "object",
                                        "properties": {
                                            "read": {
                                                "type": "boolean",
                                                "default": true
                                            },
                                            "write": {
                                                "type": "boolean",
                                                "default": true
                                            }
                                        }
                                    }
                                }
                            },
                            "Bug": {
                                "type": "string"
                            }
                        }
                    },
                    "query": {
                        "type": "object",
                        "properties": {}
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Database-Id": {
                                "type": "string",
                                "default": "{LoginDB_settings.database_id}"
                            },
                            "X-Appery-Session-Token": {
                                "type": "string"
                            },
                            "Content-Type": {
                                "type": "string",
                                "default": "application/json"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "_createdAt": {
                                "type": "string"
                            },
                            "_id": {
                                "type": "string"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "LoginService": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/db/login"
            },
            "method": {
                "type": "string",
                "default": "post"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "username": {
                                "type": "string"
                            },
                            "password": {
                                "type": "string"
                            }
                        }
                    },
                    "query": {
                        "type": "object",
                        "properties": {}
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Database-Id": {
                                "type": "string",
                                "default": "{SecuritySettings.database_id}"
                            },
                            "Content-Type": {
                                "type": "string",
                                "default": "application/json"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "sessionToken": {
                                "type": "string"
                            },
                            "_id": {
                                "type": "string"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "LoginDB_Userdisplay_list_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/db/collections/Userdisplay"
            },
            "method": {
                "type": "string",
                "default": "get"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "query": {
                        "type": "object",
                        "properties": {}
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Database-Id": {
                                "type": "string",
                                "default": "{LoginDB_settings.database_id}"
                            },
                            "X-Appery-Session-Token": {
                                "type": "string"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "$": {
                                "type": "array",
                                "items": [{
                                    "type": "object",
                                    "properties": {
                                        "city": {
                                            "type": "string"
                                        },
                                        "jobID": {
                                            "type": "string"
                                        },
                                        "position": {
                                            "type": "string"
                                        },
                                        "_id": {
                                            "type": "string"
                                        },
                                        "_createdAt": {
                                            "type": "string"
                                        },
                                        "phoneNumber": {
                                            "type": "string"
                                        },
                                        "acl": {
                                            "type": "object",
                                            "properties": {
                                                "*": {
                                                    "type": "object",
                                                    "properties": {
                                                        "write": {
                                                            "type": "boolean",
                                                            "default": true
                                                        },
                                                        "read": {
                                                            "type": "boolean",
                                                            "default": true
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "_updatedAt": {
                                            "type": "string"
                                        },
                                        "firstName": {
                                            "type": "string"
                                        },
                                        "lastName": {
                                            "type": "string"
                                        },
                                        "username": {
                                            "type": "string"
                                        }
                                    }
                                }]
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "SocialSharingService": {
        "type": "object",
        "properties": {
            "request": {
                "type": "object",
                "properties": {
                    "data": {
                        "type": "object",
                        "properties": {
                            "subject": {
                                "type": "string"
                            },
                            "url": {
                                "type": "string"
                            },
                            "files": {
                                "type": "array",
                                "items": [{
                                    "type": "string"
                                }]
                            },
                            "message": {
                                "type": "string"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "data": {
                        "type": "object",
                        "properties": {
                            "app": {
                                "type": "string"
                            }
                        }
                    }
                }
            }
        }
    }
};
/**
 * Data storage
 */