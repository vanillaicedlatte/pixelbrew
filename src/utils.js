// Import the Postmark library
import postmark from "postmark";
import { NETLIFY_ENV } from 'astro/netlify/variables';
const client = new postmark.ServerClient(NETLIFY_ENV.POSTMARK_API_TOKEN);

export async function post(request) { 
    const formData = await request.formData();
  
    // Send confirmation email using Postmark
    await client.sendEmailWithTemplate({
      "From": "jamie@pixelbrew.co",
      "To": formData.get('email'),
      "TemplateId": 35836785,
      "TemplateModel": {
        "clientName": formData.get('firstName') + ' ' + formData.get('lastName'),
        "businessName": formData.get('businessName'),
        "email": formData.get('email'),
        "phone": formData.get('phone'),
        "website": formData.get('website'),
        "lineOfBusiness": formData.get('lineOfBusiness'),
        "tasksInterest": formData.get('tasksInterest'),
        "requestFrequency": formData.get('requestFrequency'),
        "communicationMethod": formData.get('communicationMethod'),
        "introMeeting": formData.get('introMeeting')
      }
    });
  
    return {
      status: 303,
      headers: {
        'Location': '/register/success' 
      }
    };
  }