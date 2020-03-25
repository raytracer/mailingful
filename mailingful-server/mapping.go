package main

const mapping = `
{
    "mappings": {
        "_doc": {
            "properties": {
                "AccountId": {
                    "type": "keyword"
                },
                "HTMLBody": {
                    "type": "text"
                },
                "Labels": {
                    "type": "keyword"
                },
                "Mail": {
                    "properties": {
                        "BCC": {
                            "fields": {
                                "keyword": {
                                    "ignore_above": 256,
                                    "type": "keyword"
                                }
                            },
                            "type": "text"
                        },
                        "CC": {
                            "fields": {
                                "keyword": {
                                    "ignore_above": 256,
                                    "type": "keyword"
                                }
                            },
                            "type": "text"
                        },
                        "Date": {
                            "type": "date"
                        },
                        "From": {
                            "fields": {
                                "keyword": {
                                    "ignore_above": 256,
                                    "type": "keyword"
                                }
                            },
                            "type": "text"
                        },
                        "Id": {
                            "type": "keyword"
                        },
                        "InReplyTo": {
                            "type": "keyword"
                        },
                        "MessageId": {
                            "type": "keyword"
                        },
                        "Seen": {
                            "type": "boolean"
                        },
                        "Subject": {
                            "fields": {
                                "keyword": {
                                    "ignore_above": 256,
                                    "type": "keyword"
                                }
                            },
                            "type": "text"
                        },
                        "To": {
                            "fields": {
                                "keyword": {
                                    "ignore_above": 256,
                                    "type": "keyword"
                                }
                            },
                            "type": "text"
                        }
                    }
                },
                "TextBody": {
                    "type": "text"
                }
            }
        }
    }
}`
