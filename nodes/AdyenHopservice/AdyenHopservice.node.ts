import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { hostedOnboardingPageDescription } from './resources/hosted-onboarding-page';
import { pciComplianceQuestionnairePageDescription } from './resources/pci-compliance-questionnaire-page';

export class AdyenHopservice implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Adyen Hopservice',
                name: 'N8nDevAdyenHopservice',
                icon: { light: 'file:./adyen-hopservice.svg', dark: 'file:./adyen-hopservice.dark.svg' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Classic integration. For new implementations, consult the new guide.',
                defaults: { name: 'Adyen Hopservice' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAdyenHopserviceApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Hosted Onboarding Page",
					"value": "Hosted Onboarding Page",
					"description": ""
				},
				{
					"name": "PCI Compliance Questionnaire Page",
					"value": "PCI Compliance Questionnaire Page",
					"description": ""
				}
			],
			"default": ""
		},
		...hostedOnboardingPageDescription,
		...pciComplianceQuestionnairePageDescription
                ],
        };
}
