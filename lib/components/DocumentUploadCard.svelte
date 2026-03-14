<!-- Document Upload Card Component -->
<script>
	import { onMount } from 'svelte';

	export let document = {};
	export let onUpload = () => {};

	let isDragOver = false;
	let isUploading = false;
	let fileName = '';
	let fileSize = '';
	let uploadProgress = 0;

	const handleDragOver = (e) => {
		e.preventDefault();
		isDragOver = true;
	};

	const handleDragLeave = () => {
		isDragOver = false;
	};

	const handleDrop = (e) => {
		e.preventDefault();
		isDragOver = false;
		const files = e.dataTransfer.files;
		if (files.length > 0) {
			processFile(files[0]);
		}
	};

	const handleFileInput = (e) => {
		const files = e.target.files;
		if (files.length > 0) {
			processFile(files[0]);
		}
	};

	const processFile = (file) => {
		fileName = file.name;
		fileSize = (file.size / 1024 / 1024).toFixed(2) + ' MB';
		isUploading = true;
		uploadProgress = 0;

		// Simulate upload progress
		const interval = setInterval(() => {
			uploadProgress += Math.random() * 30;
			if (uploadProgress >= 100) {
				uploadProgress = 100;
				clearInterval(interval);
			}
		}, 200);

		// Simulate validation delay
		setTimeout(() => {
			isUploading = false;
			onUpload({
				documentId: document.id,
				fileName,
				fileSize,
				validated: true,
				validationStatus: 'success',
				extractedData: {
					passportNumber: 'AB123456',
					expiryDate: '2028-06-15',
					fullName: 'John Doe',
					dateOfBirth: '1990-05-20'
				}
			});
		}, 2000);
	};
</script>

<div
	class="card p-6 md:p-8 border-2 transition-all
	{isDragOver ? 'border-blue-500 bg-blue-50' : 'border-transparent'}
	{document.validated
		? document.validationStatus === 'success'
			? 'border-green-300'
			: 'border-red-300'
		: ''}"
	on:dragover={handleDragOver}
	on:dragleave={handleDragLeave}
	on:drop={handleDrop}
	role="button"
	tabindex="0"
>
	<!-- Header with Status -->
	<div class="flex items-start justify-between mb-4">
		<div>
			<h3 class="text-lg font-semibold text-gray-900">{document.name}</h3>
			{#if document.required}
				<p class="text-sm text-red-600 font-medium">Required</p>
			{:else}
				<p class="text-sm text-gray-500">Optional</p>
			{/if}
		</div>

		<!-- Status Badge -->
		{#if document.validated}
			{#if document.validationStatus === 'success'}
				<div class="animate-bounce">
					<svg class="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
						<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
					</svg>
				</div>
			{:else}
				<div class="animate-pulse">
					<svg class="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
						<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
					</svg>
				</div>
			{/if}
		{/if}
	</div>

	<!-- Upload Area -->
	{#if !document.uploaded || isUploading}
		<div class="text-center">
			<!-- Icon -->
			<div class="mb-4">
				{#if isUploading}
					<div class="inline-block">
						<svg class="w-12 h-12 text-blue-600 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
						</svg>
					</div>
				{:else}
					<svg class="w-12 h-12 text-blue-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
					</svg>
				{/if}
			</div>

			{#if isUploading}
				<p class="text-gray-700 font-medium mb-2">Uploading...</p>
				<!-- Progress Bar -->
				<div class="w-full bg-gray-200 rounded-full h-2 mb-4 overflow-hidden">
					<div
						class="bg-blue-600 h-full transition-all duration-300 ease-out"
						style="width: {uploadProgress}%"
					/>
				</div>
				<p class="text-sm text-gray-500">{Math.round(uploadProgress)}%</p>
			{:else}
				<p class="text-gray-700 font-medium mb-2">
					Drag & drop your {document.name.toLowerCase()} here
				</p>
				<p class="text-sm text-gray-500 mb-4">or click to browse</p>

				<!-- Hidden file input -->
				<input
					type="file"
					id="file-{document.id}"
					class="hidden"
					on:change={handleFileInput}
					accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
				/>
				<label
					for="file-{document.id}"
					class="inline-block btn-primary cursor-pointer"
				>
					Choose File
				</label>
			{/if}
		</div>
	{:else}
		<!-- File Preview -->
		<div class="bg-gray-50 rounded-lg p-4 mb-4">
			<div class="flex items-center justify-between">
				<div class="flex items-center gap-3">
					<svg class="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
						<path d="M14,2H6A2,2 0 0,0 4,4V20a2,2 0 0,0 2,2H18a2,2 0 0,0 2,-2V8L14,2M18,20H6V4H13V9H18V20Z" />
					</svg>
					<div>
						<p class="font-medium text-gray-900">{fileName}</p>
						<p class="text-sm text-gray-500">{fileSize}</p>
					</div>
				</div>
				<button
					on:click={() => {
						document.uploaded = false;
						fileName = '';
					}}
					class="text-red-600 hover:text-red-800 transition-colors"
				>
					<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
						<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
					</svg>
				</button>
			</div>
		</div>

		<!-- Extracted Data (if validated) -->
		{#if document.validated && document.extractedData}
			<div class="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
				<p class="text-sm font-semibold text-green-900 mb-3">Extracted Information:</p>
				<div class="space-y-2">
					{#each Object.entries(document.extractedData) as [key, value]}
						<div class="flex justify-between items-center text-sm">
							<span class="text-gray-700 capitalize">{key.replace(/_/g, ' ')}:</span>
							<span class="font-medium text-gray-900">{value}</span>
						</div>
					{/each}
				</div>
			</div>
		{/if}

		<!-- Upload Another -->
		<button
			on:click={() => {
				document.uploaded = false;
				fileName = '';
			}}
			class="btn-secondary w-full text-center"
		>
			Upload Different File
		</button>
	{/if}
</div>

<style>
	:global(.animate-bounce) {
		animation: bounce 1s infinite;
	}

	@keyframes bounce {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
	}
</style>
