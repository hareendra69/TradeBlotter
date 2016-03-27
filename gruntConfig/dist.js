module.exports = function(grunt) {
    return {
        artifact: {
            build: {
                url: process.env.BUILD_URL
            },
            platform: {
                'nodejs': '0.12.x'
            },
            config: {
                contexts: [{
                    name: '.<%= pkg.name %>rc',
                    type: 'application/json',
                    schema: {
                        type: "object",
                        properties: {
                            port: {
                                type: "string",
                                default: 8080
                            }
                        }
                    }
                }]
            }
        }
    };
};
