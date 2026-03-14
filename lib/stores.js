import { writable } from 'svelte/store';

// User authentication store
export const user = writable({
	isAuthenticated: false,
	id: null,
	name: null
});

// Border type selection store
export const borderType = writable(null);

// Vehicle entries store
export const vehicleEntries = writable([
	{ id: 1, name: 'Carlos Méndez', licensePlate: 'ABC-1234', status: 'Cleared' },
	{ id: 2, name: 'Sarah Johnson', licensePlate: 'XYZ-9876', status: 'Cleared' },
	{ id: 3, name: 'Wei Zhang', licensePlate: 'DEF-5678', status: 'Flagged' },
	{ id: 4, name: 'Amara Osei', licensePlate: 'GHI-3210', status: 'Cleared' },
	{ id: 5, name: 'Ivan Petrov', licensePlate: 'JKL-6543', status: 'Flagged' },
	{ id: 6, name: 'Maria Silva', licensePlate: 'MNO-8765', status: 'Cleared' }
]);

// Dashboard stats store
export const dashboardStats = writable({
	vehiclesChecked: 1247,
	successRate: 96.8,
	flaggedToday: 12,
	avgProcessing: '2m 14s'
});

// Document submission store
export const documentForm = writable({
	nationality: '',
	caseType: ''
});

// Document tracking store
export const documentStatus = writable({
	documents: [],
	completedCount: 0,
	totalCount: 0
});
