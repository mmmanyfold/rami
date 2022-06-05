<script>
    import { page } from '$app/stores';
	export let tag;
</script>


<ul>
    <li class="row">
        <div>
            <div class="title">
                <sup class="middle">(24)</sup>
                <h1>Dog</h1>
            </div>
        </div>
        <div class="tags">
            <div><a href="#">{tag || "Video"}</a></div>
            <div><a href="#">2021</a></div>
        </div>
    </li>

    <li class="row">
        <div>
            <div class="title">
                <sup class="middle">(24)</sup>
                <h1>Dog</h1>
            </div>
        </div>
        <div class="tags">
            <div><a href="#">{tag || "Video"}</a></div>
            <div><a href="#">2020</a></div>
        </div>
    </li>
</ul>


<style lang="less">
	ul {
		margin-top: 1.2rem;

		@media screen and (min-width: @mid-break) {
			margin-top: 0.25rem;
		}
	}

	li.row {
		padding: 1rem 0;
		border-bottom: 1px solid @accent-color;

		@media screen and (min-width: @mid-break) {
			display: flex;
			justify-content: space-between;
		}
	}

    .title {
		@media screen and (min-width: @mid-break) {
			display: flex;
			align-items: center;
		}
	}

	h1 {
		margin: 0.3rem 0 0;
		font-style: italic;
		font-size: 1.45rem;

		@media screen and (min-width: @mid-break) {
			margin-top: 0;
			margin-left: 1rem;
		}
	}

	.tags {
		display: flex;
		flex-direction: column;
		align-items: flex-end;

		@media screen and (min-width: @mid-break) {
			flex-direction: row;
			align-items: center;
		}

		div {
			margin-top: 0.4rem;
			margin-left: 1.25rem;

			@media screen and (min-width: @mid-break) {
				margin-top: 0;
			}
		}
	}
</style>
