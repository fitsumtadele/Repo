export const Config = {

    "global": {
        "app_version": "2.0.2"
    },
    "env": {
        "development": {
            "public": {
                "EnvironmentConfig": {
                    "RootAPIURL": "http://35.184.137.237:8082/api/"
                }
            },
            "local": {
                "EnvironmentConfig": {
                    "RootAPIURL": "http://192.168.2.81:8084/api/"
                }
            },
            "jsiLocal": {
                "EnvironmentConfig": {
                    "RootAPIURL": "http://192.168.2.81:8085/api/"
                }
            }
        },
        "staging": {
            "public": {
                "EnvironmentConfig": {
                    "RootAPIURL": "http://35.184.137.237:8080/api/"
                }
            },
            "local": {
                "EnvironmentConfig": {
                    "RootAPIURL": "http://192.168.2.81:8084/api/"
                }
            },
            "jsiLocal": {
                "EnvironmentConfig": {
                    "RootAPIURL": "http://192.168.2.81:8084/api/"
                }
            }
        },
        "production": {
            "EnvironmentConfig": {
                "RootAPIURL": "#{RootAPIURL}"
            }
        }

    }
}
