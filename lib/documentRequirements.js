// Document requirements based on nationality and case type
export const documentRequirements = {
	'Pakistan': {
		'Tourist': [
			{ id: 'passport', name: 'Passport', required: true, type: 'document' },
			{ id: 'visa', name: 'Indian Visa', required: true, type: 'document' },
			{ id: 'return_ticket', name: 'Return Ticket', required: true, type: 'document' },
			{ id: 'hotel_booking', name: 'Hotel Booking', required: true, type: 'document' },
			{ id: 'bank_statement', name: 'Bank Statement', required: true, type: 'document' },
			{ id: 'travel_insurance', name: 'Travel Insurance', required: false, type: 'document' }
		],
		'Business': [
			{ id: 'passport', name: 'Passport', required: true, type: 'document' },
			{ id: 'visa', name: 'Indian Visa', required: true, type: 'document' },
			{ id: 'invitation_letter', name: 'Invitation Letter', required: true, type: 'document' },
			{ id: 'company_id', name: 'Company ID/Authorization', required: true, type: 'document' },
			{ id: 'hotel_booking', name: 'Hotel Booking', required: true, type: 'document' },
			{ id: 'bank_statement', name: 'Bank Statement', required: true, type: 'document' }
		],
		'Student': [
			{ id: 'passport', name: 'Passport', required: true, type: 'document' },
			{ id: 'visa', name: 'Student Visa', required: true, type: 'document' },
			{ id: 'admission_letter', name: 'Admission Letter', required: true, type: 'document' },
			{ id: 'proof_funds', name: 'Proof of Funds', required: true, type: 'document' },
			{ id: 'university_id', name: 'University Enrollment ID', required: false, type: 'document' }
		],
		'Transit': [
			{ id: 'passport', name: 'Passport', required: true, type: 'document' },
			{ id: 'transit_visa', name: 'Transit Visa', required: true, type: 'document' },
			{ id: 'onward_ticket', name: 'Onward Journey Ticket', required: true, type: 'document' }
		]
	},
	'Bangladesh': {
		'Tourist': [
			{ id: 'passport', name: 'Passport', required: true, type: 'document' },
			{ id: 'visa', name: 'Indian Visa', required: true, type: 'document' },
			{ id: 'return_ticket', name: 'Return Ticket', required: true, type: 'document' },
			{ id: 'hotel_booking', name: 'Hotel Booking', required: true, type: 'document' },
			{ id: 'bank_statement', name: 'Bank Statement', required: true, type: 'document' }
		],
		'Business': [
			{ id: 'passport', name: 'Passport', required: true, type: 'document' },
			{ id: 'visa', name: 'Indian Visa', required: true, type: 'document' },
			{ id: 'invitation_letter', name: 'Invitation Letter', required: true, type: 'document' },
			{ id: 'company_id', name: 'Company ID/Authorization', required: true, type: 'document' },
			{ id: 'hotel_booking', name: 'Hotel Booking', required: true, type: 'document' },
			{ id: 'bank_statement', name: 'Bank Statement', required: true, type: 'document' }
		]
	},
	'Nepal': {
		'Tourist': [
			{ id: 'passport', name: 'Passport', required: true, type: 'document' },
			{ id: 'visa', name: 'Indian Visa', required: true, type: 'document' },
			{ id: 'return_ticket', name: 'Return Ticket', required: true, type: 'document' },
			{ id: 'hotel_booking', name: 'Hotel Booking', required: false, type: 'document' },
			{ id: 'bank_statement', name: 'Bank Statement', required: false, type: 'document' }
		]
	},
	'China': {
		'Tourist': [
			{ id: 'passport', name: 'Passport', required: true, type: 'document' },
			{ id: 'visa', name: 'Indian Visa', required: true, type: 'document' },
			{ id: 'return_ticket', name: 'Return Ticket', required: true, type: 'document' },
			{ id: 'hotel_booking', name: 'Hotel Booking', required: true, type: 'document' },
			{ id: 'bank_statement', name: 'Bank Statement', required: true, type: 'document' },
			{ id: 'travel_insurance', name: 'Travel Insurance', required: false, type: 'document' }
		],
		'Business': [
			{ id: 'passport', name: 'Passport', required: true, type: 'document' },
			{ id: 'visa', name: 'Indian Visa', required: true, type: 'document' },
			{ id: 'invitation_letter', name: 'Invitation Letter', required: true, type: 'document' },
			{ id: 'bank_statement', name: 'Bank Statement', required: true, type: 'document' }
		]
	},
	'India': {
		'Tourist': [
			{ id: 'passport', name: 'Passport', required: true, type: 'document' },
			{ id: 'proof_residence', name: 'Proof of Residence', required: false, type: 'document' }
		],
		'Business': [
			{ id: 'passport', name: 'Passport', required: true, type: 'document' },
			{ id: 'business_id', name: 'Business Registration', required: true, type: 'document' }
		]
	},
	'default': {
		'Tourist': [
			{ id: 'passport', name: 'Passport', required: true, type: 'document' },
			{ id: 'visa', name: 'Visa', required: true, type: 'document' },
			{ id: 'return_ticket', name: 'Return Ticket', required: true, type: 'document' },
			{ id: 'hotel_booking', name: 'Hotel Booking', required: true, type: 'document' },
			{ id: 'bank_statement', name: 'Bank Statement', required: true, type: 'document' }
		],
		'Business': [
			{ id: 'passport', name: 'Passport', required: true, type: 'document' },
			{ id: 'visa', name: 'Business Visa', required: true, type: 'document' },
			{ id: 'invitation_letter', name: 'Invitation Letter', required: true, type: 'document' },
			{ id: 'bank_statement', name: 'Bank Statement', required: true, type: 'document' }
		],
		'Student': [
			{ id: 'passport', name: 'Passport', required: true, type: 'document' },
			{ id: 'visa', name: 'Student Visa', required: true, type: 'document' },
			{ id: 'admission_letter', name: 'Admission Letter', required: true, type: 'document' },
			{ id: 'proof_funds', name: 'Proof of Funds', required: true, type: 'document' }
		],
		'Transit': [
			{ id: 'passport', name: 'Passport', required: true, type: 'document' },
			{ id: 'transit_visa', name: 'Transit Visa', required: true, type: 'document' },
			{ id: 'onward_ticket', name: 'Onward Ticket', required: true, type: 'document' }
		],
		'Refugee': [
			{ id: 'travel_doc', name: 'Travel Document', required: true, type: 'document' },
			{ id: 'refugee_cert', name: 'Refugee Certificate', required: true, type: 'document' },
			{ id: 'clearance', name: 'Security Clearance', required: true, type: 'document' }
		],
		'Trade': [
			{ id: 'passport', name: 'Passport', required: true, type: 'document' },
			{ id: 'trade_visa', name: 'Trade Visa', required: true, type: 'document' },
			{ id: 'cargo_manifest', name: 'Cargo Manifest', required: true, type: 'document' },
			{ id: 'customs_form', name: 'Customs Form', required: true, type: 'document' }
		]
	}
};

// Get document requirements for a specific nationality and case type
export function getDocumentRequirements(nationality, caseType) {
	const requirements = documentRequirements[nationality]?.[caseType] || 
	                      documentRequirements['default'][caseType] || 
	                      documentRequirements['default']['Tourist'];
	
	return requirements.map(doc => ({
		...doc,
		uploaded: false,
		validated: false,
		validationStatus: null,
		extractedData: null
	}));
}
