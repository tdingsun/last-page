<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { page } from '$app/state';
	import { siteState } from '$lib/state.svelte.js';
	let { children, data } = $props();
	let inCorner = $state(false);
	let showNav = $state(false);
	const onMouseOverCorner = () => {
		inCorner = true;
	};
	const onMouseLeaveCorner = () => {
		inCorner = false;
	};
	const toggleNav = () => {
		showNav = !showNav
	}
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<SiteHeader welcomeMessage={data.homePage.welcomeMessage}></SiteHeader>
<div class="sticky top-0 flex h-full max-h-[calc(100dvh-240px)] w-full">
	<button onclick={toggleNav} 
		class="md:hidden fixed top-4 flex size-12 items-center justify-center rounded-r-sm border border-l-0 border-brown bg-beige"
		>Menu</button
	>
	<div class="{showNav ? 'translate-x-0' : '-translate-x-46 md:translate-x-0'} sm:block absolute md:relative ">
		<Nav></Nav>
	</div>

	<div class="{showNav ? ' translate-x-46 md:translate-x-0' : 'translate-x-0'} ml-4 transition-transform relative  mx-auto h-dvh max-h-[calc(100dvh-100px)] w-full">
		<div
			class="{inCorner
				? 'clipped-corner-big'
				: 'clipped-corner'} absolute top-0 right-0 bottom-0 left-0 flex flex-col border-l border-brown transition-[clip-path]"
		>
			<div
				class="absolute top-0 left-0 h-12 {page.url.pathname === '/'
					? 'sm:w-[calc(100%-95px)] sm:rounded-tr-md sm:border-r'
					: ''} w-full border-t"
			></div>
			<a
				href="/"
				onmouseover={() => {
					onMouseOverCorner();
				}}
				onmouseleave={() => {
					onMouseLeaveCorner();
				}}
				onfocus={() => {
					onMouseOverCorner();
				}}
				onblur={() => {
					onMouseLeaveCorner();
				}}
				class="group absolute top-[-1px] left-[-1px] z-10 h-12 w-12 hover:h-14 hover:w-14"
			>
				<div
					class="h-0 w-0 rounded-br-[4px] border-b-[48px] border-l-[48px] border-b-brown border-l-[transparent] shadow-[0px_2px_10px_0px_#9F938A] transition-[border] group-hover:border-b-[56px] group-hover:border-l-[56px]"
				>
					<div
						class="absolute top-[3px] left-[3px] h-0 w-0 rounded-br-[3px] border-b-[44px] border-l-[44px] border-b-beige border-l-[transparent] transition-[border] group-hover:border-b-[52px] group-hover:border-l-[52px]"
					></div>
				</div></a
			>

			
			<div class="mt-px  overflow-scroll sm:px-4 pb-16 md:pl-16">
				{@render children()}
			</div>
		</div>
	</div>
</div>

<style>
	.clipped-corner {
		-webkit-clip-path: polygon(48px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 48px);
		clip-path: polygon(48px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 48px);
	}
	.clipped-corner-big {
		-webkit-clip-path: polygon(56px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 56px);
		clip-path: polygon(56px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 56px);
	}
</style>
