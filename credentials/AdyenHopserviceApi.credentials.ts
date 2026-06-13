import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AdyenHopserviceApi implements ICredentialType {
        name = 'N8nDevAdyenHopserviceApi';

        displayName = 'Adyen Hopservice API';

        icon: Icon = { light: 'file:../nodes/AdyenHopservice/adyen-hopservice.svg', dark: 'file:../nodes/AdyenHopservice/adyen-hopservice.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://cal-test.adyen.com/cal/services/Hop/v6',
                        required: true,
                        placeholder: 'https://cal-test.adyen.com/cal/services/Hop/v6',
                        description: 'The base URL of your Adyen Hopservice API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-API-Key': '={{$credentials.apiKey}}',
                        },
                },
        };


}
