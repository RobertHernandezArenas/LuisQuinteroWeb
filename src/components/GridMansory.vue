<template>
	<div class="gridywrap" id="gallery" >
		<div class="gridy-2 gridyhe-1">
			<div
				class="gridimg"
				style="
					background-image: url('/images/lui0.jpg');
				"
			>
				&nbsp;
			</div>

			<div class="gridinfo">
				<h3>Item Title</h3>
				<div class="gridmeta">
					<p class="gridwhen">
						<i class="fa fa-clock-o"></i> 17:22 17th Feb 2015
					</p>
					<p class="gridwho"><i class="fa fa-user"></i> Bruce Wayne</p>
				</div>
				<p class="gridexerpt">
					Lorem ipsum dolor set amet, some dummy content..
				</p>
				<a href="#" class="grid-btn grid-more"
					><span>More</span> <i class="fa fa-plus"></i
				></a>
			</div>
		</div>
		<div class="gridy-1 gridyhe-1">
			<div
				class="gridimg"
				style="
					background-image: url('/images/luis11.jpg');
				"
			>
				&nbsp;
			</div>

			<div class="gridinfo">
				<h3>Item Title</h3>
				<div class="gridmeta">
					<p class="gridwhen">
						<i class="fa fa-clock-o"></i> 17:22 17th Feb 2015
					</p>
					<p class="gridwho"><i class="fa fa-user"></i> Harvey Dent</p>
				</div>
				<p class="gridexerpt">
					Lorem ipsum dolor set amet, some dummy content..
				</p>
				<a href="#" class="grid-btn grid-more"
					><span>More</span> <i class="fa fa-plus"></i
				></a>
			</div>
		</div>
		<div class="gridy-1 gridyhe-2">
			<div
				class="gridimg"
				style="
					background-image:  url('/images/lui5.jpg');
				"
			>
				&nbsp;
			</div>

			<div class="gridinfo">
				<h3>Item Title</h3>
				<div class="gridmeta">
					<p class="gridwhen">
						<i class="fa fa-clock-o"></i> 17:22 17th Feb 2015
					</p>
					<p class="gridwho"><i class="fa fa-user"></i> Clark Kent</p>
				</div>
				<p class="gridexerpt">
					Lorem ipsum dolor set amet, some dummy content..
				</p>
				<a href="#" class="grid-btn grid-more"
					><span>More</span> <i class="fa fa-plus"></i
				></a>
			</div>
		</div>
		<div class="gridy-2 gridyhe-1">
			<div
				class="gridimg"
				style="
					background-image: url('/images/luisito.jpg');
				"
			>
				&nbsp;
			</div>

			<div class="gridinfo">
				<h3>Item Title</h3>
				<div class="gridmeta">
					<p class="gridwhen">
						<i class="fa fa-clock-o"></i> 17:22 17th Feb 2015
					</p>
					<p class="gridwho"><i class="fa fa-user"></i> Tony Stark</p>
				</div>
				<p class="gridexerpt">
					Lorem ipsum dolor set amet, some dummy content..
				</p>
				<a href="#" class="grid-btn grid-more"
					><span>More</span> <i class="fa fa-plus"></i
				></a>
			</div>
		</div>
		<div class="gridy-1 gridyhe-1">
			<div
				class="gridimg"
				style="
					background-image: url(https://ununsplash.imgix.net/photo-1418227165283-1595d13726cd?q=75&fm=jpg&s=cace1590a29be6d4d6db13c3ebd1ba72);
				"
			>
				&nbsp;
			</div>
			<div class="gridinfo">
				<h3>Item Title</h3>
				<div class="gridmeta">
					<p class="gridwhen">
						<i class="fa fa-clock-o"></i> 17:22 17th Feb 2015
					</p>
					<p class="gridwho"><i class="fa fa-user"></i> Steve Rogers</p>
				</div>
				<p class="gridexerpt">
					Lorem ipsum dolor set amet, some dummy content..
				</p>
				<a href="#" class="grid-btn grid-more"
					><span>More</span> <i class="fa fa-plus"></i
				></a>
			</div>
		</div>
		<div class="gridy-1 gridyhe-1">
			<div
				class="gridimg"
				style="
					background-image: url(https://unsplash.imgix.net/uploads/1411589183965bdf6e141/5f468e98?q=75&fm=jpg&s=007333c388fb36767cbd152600bea6b8);
				"
			>
				&nbsp;
			</div>

			<div class="gridinfo">
				<h3>Item Title</h3>
				<div class="gridmeta">
					<p class="gridwhen">
						<i class="fa fa-clock-o"></i> 17:22 17th Feb 2015
					</p>
					<p class="gridwho">
						<i class="fa fa-user"></i> Natasha Romanoff
					</p>
				</div>
				<p class="gridexerpt">
					Lorem ipsum dolor set amet, some dummy content..
				</p>
				<a href="#" class="grid-btn grid-more"
					><span>More</span> <i class="fa fa-plus"></i
				></a>
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300,600);

#gallery {
	width: 80vw;
}

.gridywrap div[class*="gridy"] {
	background: #eee;
	box-shadow: inset 0 0 0 1px #ddd;
	padding: 15px;
	float: left;
	position: relative;
}
.gridywrap .gridy-1,
.gridywrap .gridy-2,
.gridywrap .gridy-3 {
	width: 320px;
	overflow: hidden;
}

.gridywrap .gridy-1,
.gridywrap .gridy-2,
.gridywrap .gridy-3 {
	width: 100%;
}

.gridywrap .gridyhe-1,
.gridywrap .gridyhe-2 {
	height: 320px;
}

@media screen and (min-width: 640px) {
	.gridywrap .gridyhe-2 {
		height: 320px;
	}
	.gridywrap {
		width: 100%;
	}
	.gridywrap .gridy-1,
	.gridywrap .gridy-2 {
		width: 50%;
	}
	.gridywrap .gridy-3 {
		width: 100%;
	}
}
@media screen and (min-width: 1024px) {
    .gridywrap {
        width: 100vw;
        margin: 0 auto;
    }

	.gridywrap .gridy-1 {
		width: 33.3%;
	}
	.gridywrap .gridy-2 {
		width: 66.6%;
	}
	.gridywrap .gridy-3 {
		width: 100%;
	}
	.gridywrap .gridyhe-2 {
		height: 640px;
	}
}

/*styling*/
.gridywrap .gridimg {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	overflow: hidden;
	background-position: center center;
	background-size: cover;
}
.gridywrap .gridimg img {
	width: 100%;
}
.gridywrap .gridinfo {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.4);
	text-align: center;
	transition: all 0.8s;
}
.gridywrap .gridinfo h3 {
	font-size: 24px;
	color: #fff;
	font-weight: bold;
	text-transform: uppercase;
	margin: 130px 0 20px;
	position: relative;
}
.gridywrap .gridinfo h3:after {
	content: "";
	width: 25px;
	border-top: 4px solid #fff;
	display: block;
	margin: 0 auto;
	margin-top: 25px;
}
.gridywrap .gridinfo .gridmeta {
	transition-delay: 0.25s;
}
.gridywrap .gridinfo .gridmeta p {
	display: inline-block;
	font-size: 13px;
	color: #fff;
	margin-bottom: 15px;
}
.gridywrap .gridinfo .gridmeta p i {
	margin-right: 5px;
}
.gridywrap .gridinfo .gridmeta p.gridwho {
	margin-left: 25px;
}
.gridywrap .gridinfo p.gridexerpt {
	width: 60%;
	margin: 0 auto;
	line-height: 22px;
	margin-bottom: 25px;
	color: #fff;
	transition-delay: 0.5s;
}

.gridywrap .gridinfo * {
	opacity: 0;
	transition: all 0.8s;
}
.gridywrap .gridinfo h3 {
	opacity: 1;
}
.gridywrap .gridinfo .grid-btn {
	color: #fff;
	text-decoration: none;
	margin: 0 auto;
	width: 35px;
	height: 35px;
	line-height: 35px;
	border-radius: 25px;
	border: 1px solid #fff;
	display: block;
	overflow: hidden;
}
.gridywrap .gridinfo .grid-btn:hover {
	width: 75px;
	background: rgba(0, 0, 0, 0.3);
}
.gridywrap .gridinfo .grid-btn span {
	opacity: 0;
	display: none;
	transition: opacity 0.8s;
}
.gridywrap .gridinfo .grid-btn:hover span {
	opacity: 1;
	display: inline;
}
.gridywrap .gridinfo .grid-btn:hover i {
	opacity: 0;
	display: none;
}

.gridywrap .gridinfo:hover * {
	opacity: 0.7;
}
.gridywrap .gridinfo:hover p {
	opacity: 1;
}
.gridywrap .gridinfo:hover {
	background: rgba(156, 158, 12, 0.35);
}
.gridywrap .gridinfo:hover h3 {
	margin-top: 70px;
	opacity: 1;
}
</style>
