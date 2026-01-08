<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { page } from '$app/state';
	import { beforeNavigate, goto } from '$app/navigation';
	import { onMount } from 'svelte';
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
		showNav = !showNav;
	};

	const toggleView = () => {
		siteState.isListView = !siteState.isListView;
	};

	const cornerButton = () => {
		inCorner = true;

		if (page.url.pathname === '/' || page.url.pathname.startsWith('/tags/')) {
			if (window.innerWidth < 640) {
				toggleNav();
			} else {
				toggleView();
			}
		} else {
			goto('/', {
				keepFocus: true
			});
		}
	};

	beforeNavigate(() => {
		if (window.innerWidth < 640) {
			showNav = false;
		} else {
			showNav = true;
		}
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<SiteHeader welcomeMessage={data.homePage.welcomeMessage}></SiteHeader>
<div class="sticky top-0 flex h-full w-full overflow-x-hidden">
	<div
		class="  {showNav
			? 'translate-x-0 '
			: '-translate-x-50 sm:translate-x-0'} absolute h-dvh py-1 sm:relative sm:transition-[width]"
	>
		<Nav></Nav>
	</div>

	<div
		class="{showNav
			? ' translate-x-50 sm:translate-x-0 '
			: 'translate-x-0 '} relative mx-auto ml-1 h-dvh w-full max-sm:transition-transform"
	>
		<div
			class="{inCorner
				? 'clipped-corner-big'
				: 'clipped-corner'} absolute top-0 right-0 bottom-0 left-0 mt-1 flex flex-col border-t border-l border-brown transition-[clip-path]"
		>
			<button
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
				onclick={cornerButton}
				class="group absolute top-[-1px] left-[-1px] z-10 h-12 w-12 cursor-pointer transition-[width,height] hover:sm:h-16 hover:sm:w-16"
			>
				<div
					class="h-0 w-0 rounded-br-[4px] border-b-[48px] border-l-[48px] border-b-brown border-l-[transparent] transition-[border] group-hover:sm:border-b-[64px] group-hover:sm:border-l-[64px]"
				>
					<div
						class="absolute top-[2px] left-[2px] h-0 w-0 rounded-br-[3px] border-b-[45px] border-l-[45px] border-b-beige border-l-[transparent] transition-[border] group-hover:sm:border-b-[61px] group-hover:sm:border-l-[61px]"
					></div>
				</div></button
			>

			<div class="overflow-scroll bg-beige px-1">
				{@render children()}
			</div>
		</div>
	</div>
</div>

<style>
	.clipped-corner,
	.clipped-corner-big {
		-webkit-clip-path: polygon(48px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 48px);
		clip-path: polygon(48px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 48px);
	}

	@media (width >= 40rem) {
		.clipped-corner-big {
			-webkit-clip-path: polygon(64px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 64px);
			clip-path: polygon(64px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 64px);
		}
	}
</style>
