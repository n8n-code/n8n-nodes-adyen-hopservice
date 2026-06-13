import type { INodeProperties } from 'n8n-workflow';

export const hostedOnboardingPageDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Hosted Onboarding Page"
					]
				}
			},
			"options": [
				{
					"name": "Post Get Onboarding URL",
					"value": "Post Get Onboarding URL",
					"action": "Get a link to a Adyen-hosted onboarding page",
					"description": "Returns a link to an Adyen-hosted onboarding page (HOP) that you can send to your account holder. For more information on how to use HOP, refer to [Hosted onboarding](https://docs.adyen.com/marketplaces-and-platforms/classic/collect-verification-details/hosted-onboarding-page). ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/getOnboardingUrl"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /getOnboardingUrl",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Hosted Onboarding Page"
					],
					"operation": [
						"Post Get Onboarding URL"
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
						"Hosted Onboarding Page"
					],
					"operation": [
						"Post Get Onboarding URL"
					]
				}
			}
		},
		{
			"displayName": "Collect Information",
			"name": "collectInformation",
			"type": "json",
			"default": "{}",
			"description": "Contains indicators whether the page should only collect information for specific [KYC checks](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-checks). By default, the page collects information for all KYC checks that apply to the [legal entity type](https://docs.adyen.com/marketplaces-and-platforms/classic/account-holders-and-accounts#legal-entity-types).",
			"routing": {
				"send": {
					"property": "collectInformation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hosted Onboarding Page"
					],
					"operation": [
						"Post Get Onboarding URL"
					]
				}
			}
		},
		{
			"displayName": "Edit Mode",
			"name": "editMode",
			"type": "boolean",
			"default": true,
			"description": "Indicates if editing checks is allowed even if all the checks have passed.",
			"routing": {
				"send": {
					"property": "editMode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hosted Onboarding Page"
					],
					"operation": [
						"Post Get Onboarding URL"
					]
				}
			}
		},
		{
			"displayName": "Mobile O Auth Callback URL",
			"name": "mobileOAuthCallbackUrl",
			"type": "string",
			"default": "",
			"description": "The URL to which the account holder is redirected after completing an OAuth authentication with a bank through Trustly/PayMyBank.",
			"routing": {
				"send": {
					"property": "mobileOAuthCallbackUrl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hosted Onboarding Page"
					],
					"operation": [
						"Post Get Onboarding URL"
					]
				}
			}
		},
		{
			"displayName": "Platform Name",
			"name": "platformName",
			"type": "string",
			"default": "",
			"description": "The platform name which will show up in the welcome page.",
			"routing": {
				"send": {
					"property": "platformName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hosted Onboarding Page"
					],
					"operation": [
						"Post Get Onboarding URL"
					]
				}
			}
		},
		{
			"displayName": "Return URL",
			"name": "returnUrl",
			"type": "string",
			"default": "",
			"description": "The URL where the account holder will be redirected back to after they complete the onboarding, or if their session times out. Maximum length of 500 characters. If you don't provide this, the account holder will be redirected back to the default return URL configured in your platform account.",
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
						"Hosted Onboarding Page"
					],
					"operation": [
						"Post Get Onboarding URL"
					]
				}
			}
		},
		{
			"displayName": "Shopper Locale",
			"name": "shopperLocale",
			"type": "string",
			"default": "",
			"description": "The language to be used in the page, specified by a combination of a language and country code. For example, **pt-BR**. \n\nIf not specified in the request or if the language is not supported, the page uses the browser language. If the browser language is not supported, the page uses **en-US** by default.\n\nFor a list of supported languages, refer to [Change the page language](https://docs.adyen.com/marketplaces-and-platforms/classic/hosted-onboarding-page/customize-experience#change-page-language).",
			"routing": {
				"send": {
					"property": "shopperLocale",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hosted Onboarding Page"
					],
					"operation": [
						"Post Get Onboarding URL"
					]
				}
			}
		},
		{
			"displayName": "Show Pages",
			"name": "showPages",
			"type": "json",
			"default": "{}",
			"description": "Contains indicators whether specific pages must be shown to the account holder.",
			"routing": {
				"send": {
					"property": "showPages",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Hosted Onboarding Page"
					],
					"operation": [
						"Post Get Onboarding URL"
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
						"Hosted Onboarding Page"
					],
					"operation": [
						"Post Get Onboarding URL"
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
						"Hosted Onboarding Page"
					],
					"operation": [
						"Post Get Onboarding URL"
					]
				}
			}
		},
];
