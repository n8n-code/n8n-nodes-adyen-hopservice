import type { INodeProperties } from 'n8n-workflow';

export const pciComplianceQuestionnairePageDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"PCI Compliance Questionnaire Page"
					]
				}
			},
			"options": [
				{
					"name": "Post Get Pci Questionnaire URL",
					"value": "Post Get Pci Questionnaire URL",
					"action": "Get a link to a PCI compliance questionnaire",
					"description": "Returns a link to a PCI compliance questionnaire that you can send to your account holder.\n > You should only use this endpoint if you have a [partner platform setup](https://docs.adyen.com/marketplaces-and-platforms/classic/platforms-for-partners).",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/getPciQuestionnaireUrl"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /getPciQuestionnaireUrl",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"PCI Compliance Questionnaire Page"
					],
					"operation": [
						"Post Get Pci Questionnaire URL"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Account Holder Code",
			"name": "accountHolderCode",
			"type": "string",
			"default": "",
			"description": "The account holder code you provided when you created the account holder.",
			"routing": {
				"send": {
					"property": "accountHolderCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PCI Compliance Questionnaire Page"
					],
					"operation": [
						"Post Get Pci Questionnaire URL"
					]
				}
			}
		},
		{
			"displayName": "Return URL",
			"name": "returnUrl",
			"type": "string",
			"default": "",
			"description": "The URL where the account holder will be redirected back to after they fill out the questionnaire, or if their session times out. Maximum length of 500 characters.",
			"routing": {
				"send": {
					"property": "returnUrl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PCI Compliance Questionnaire Page"
					],
					"operation": [
						"Post Get Pci Questionnaire URL"
					]
				}
			}
		},
		{
			"displayName": "Basic Auth (Base64)",
			"name": "security_basicauth",
			"type": "string",
			"default": "",
			"description": "HTTP basic authentication for BasicAuth",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Basic ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PCI Compliance Questionnaire Page"
					],
					"operation": [
						"Post Get Pci Questionnaire URL"
					]
				}
			}
		},
		{
			"displayName": "X API Key (Header)",
			"name": "security_apikeyauth",
			"type": "string",
			"default": "",
			"description": "API key for ApiKeyAuth (header: X-API-Key)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-API-Key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"PCI Compliance Questionnaire Page"
					],
					"operation": [
						"Post Get Pci Questionnaire URL"
					]
				}
			}
		},
];
