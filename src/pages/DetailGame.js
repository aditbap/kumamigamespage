import React from "react";
import { useNavigate } from "react-router-dom";

const DetailGame = () => {
	const navigate = useNavigate();
		return (
			<div className="min-h-screen font-sans text-white" style={{background: 'linear-gradient(135deg, #3A7A7A 0%, #102425 100%)'}}>
				<div className="max-w-7xl mx-auto px-4 md:px-8">
			{/* Breadcrumb & Search */}
			<div className="flex justify-between items-center pt-8">
				<div className="flex items-center gap-2 text-sm text-white/80">
					<span className="cursor-pointer hover:text-[#96EDD6] transition" onClick={() => navigate("/")}>Games Page</span>
					<span className="mx-1">&gt;</span>
					  <span className="text-[#96EDD6]">Game Detail</span>
				</div>
					<div className="flex items-center bg-[#306464] rounded-full px-4 py-2 w-56">
										<span className="flex items-center mr-2">
											<svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
												<circle cx="9" cy="9" r="7" stroke="#fff" strokeWidth="2" />
												<line x1="15.5" y1="15.5" x2="19" y2="19" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
											</svg>
										</span>
							  <input type="text" placeholder="Find Games" className="bg-transparent w-full text-white placeholder:text-white outline-none text-base" />
						</div>
			</div>

			{/* Title */}
			<h1 className="text-4xl md:text-5xl font-bold mt-6">Game Title</h1>

			{/* Main Media & Info */}
			<div className="flex flex-col md:flex-row gap-8 mt-8">
				{/* Main Image/Video */}
				<div className="flex-1">
					  <div className="bg-[#163232] rounded-2xl w-full h-[400px] md:h-[490px]" />
					{/* Info Pills */}
					  <div className="flex gap-16 mt-4 justify-center md:justify-between w-full">
						<div>
							<div className="text-xs font-bold mb-2">Genres</div>
							<div className="flex gap-2">
								<span className="bg-[#163232] text-white/90 rounded px-3 py-1 text-xs">mobile strategy</span>
								<span className="bg-[#163232] text-white/90 rounded px-3 py-1 text-xs">Card</span>
							</div>
						</div>
						<div>
							<div className="text-xs font-bold mb-2">Platform Type</div>
							<span className="bg-[#163232] text-white/90 rounded px-3 py-1 text-xs">Web 3</span>
						</div>
						<div>
							<div className="text-xs font-bold mb-2">Network</div>
							<span className="bg-[#163232] text-white/90 rounded px-3 py-1 text-xs">Mobile</span>
						</div>
						<div>
							<div className="text-xs font-bold mb-2">Device</div>
							<span className="bg-[#163232] text-white/90 rounded px-3 py-1 text-xs">Mobile</span>
						</div>
					</div>
				</div>
				{/* Side Info & Actions */}
				<div className="w-full md:w-[320px] flex flex-col gap-6 items-center md:items-end">
					<div className="w-full flex items-start" style={{ marginTop: '267px' }}>
						<div className="flex gap-3 mb-2 justify-start w-full">
							<img src="/socialmedia/discord.png" alt="Discord" className="w-5 h-5 object-contain transition-transform duration-200 hover:scale-125 hover:drop-shadow-lg cursor-pointer" />
							<img src="/socialmedia/x.png" alt="X" className="w-5 h-5 object-contain transition-transform duration-200 hover:scale-125 hover:drop-shadow-lg cursor-pointer" />
							<img src="/socialmedia/web.png" alt="Web" className="w-5 h-5 object-contain transition-transform duration-200 hover:scale-125 hover:drop-shadow-lg cursor-pointer" />
						</div>
					</div>
					<div className="w-full flex flex-col gap-2 items-start">
						<span className="text-base font-bold mb-1">Available On</span>
							<div className="flex gap-2">
								<img src="/appstore.png" alt="App Store" className="h-12 object-contain transition-transform duration-200 hover:scale-110 hover:drop-shadow-lg cursor-pointer" />
								<img src="/playstore.png" alt="Play Store" className="h-12 object-contain transition-transform duration-200 hover:scale-110 hover:drop-shadow-lg cursor-pointer" />
							</div>
						</div>
					<button className="bg-[#96EDD6] text-[#163232] rounded-lg px-8 py-3 text-lg font-bold w-full mt-2 transition-all duration-200 hover:bg-[#163232] hover:text-[#96EDD6] hover:scale-105 shadow-md hover:shadow-xl">Play Now</button>
				</div>
			</div>

			{/* Description */}
					<div className="mt-8 max-w-4xl">
						<p className="text-sm text-white/80 leading-relaxed text-justify">
							Lorem ipsum dolor sit amet consectetur. Tincidunt phasellus fermentum nulla nisi natoque semper nunc at purus. Convallis morbi in felis lorem sem in bibendum. Amet nunc magna in ultrices integer sed. Neque eleifend urna neque eget sagittis facilisis pulvinar. Amet at aliquet cursus nisl tincidunt nibh. In nisi aliquet duis tempus sit diam arcu. Ut eros donec imperdiet quam pellentesque eu. At ut hac ultricies eleifend diam dui neque. Odio tellus eu aliquam platea dis potenti. Vivamus nunc fermentum eu elementum ut quisque integer volutpat volutpat. Nisi sed nunc viverra aenean eu tempor convallis. Duis rhoncus eu pellentesque integer curabitur non risus auctor amet. Lorem massa nibh et elementum pulvinar vivamus risus. Imperdiet sem vitae vestibulum massa. Id donec fringilla lectus diam a sapien facilisis. Vitae erat pretium lacus ullamcorper id malesuada. Pellentesque sodales feugiat varius donec amet. Ipsum integer dignissim purus amet. Mattis ornare etiam feugiat cras neque vitae. Mus mattis adipiscing sollicitudin convallis lacus egestas est. Pharetra gravida sit quis id lectus tincidunt. Et ullamcorper volutpat maecenas vitae. Vel est blandit donec ut. Sem scelerisque nunc neque duis amet eu ullamcorper sed.
						</p>
			</div>

					{/* Second Media & Description */}
					<div className="mt-8 flex flex-col items-start max-w-4xl">
						<div className="bg-[#163232] rounded-2xl w-full h-[400px] md:h-[490px] mb-4" />
						<p className="text-sm text-white/80 leading-relaxed text-justify w-full mb-12">
							Lorem ipsum dolor sit amet consectetur. Dui nulla luctus nisi massa consectetur risus velit volutpat quisque. Purus mauris nisi magna porttitor aliquet dignissim consectetur. Cras amet est praesent dolor euismod. Diam nec ornare posuere commodo interdum vulputate tristique scelerisque. Pellentesque non tristique et tristique morbi porta egestas. In aliquam purus pharetra odio a velit molestie vivamus eget. Nisi mauris arcu amet aliquet eleifend blandit. Hendrerit semper sit vitae purus. At convallis iaculis arcu amet eget amet lobortis. At pulvinar auctor id ac neque cursus pellentesque hac porttitor. Ut orci cursus viverra non vulputate imperdiet urna. Tincidunt egestas enim sed nisi. Suspendisse scelerisque nunc in lectus facilisis lacinia felis. Auctor orci dui vel in congue placerat velit facilisis. Et metus at sit elit risus. Aliquam eu dui tortor sapien magna non. Senectus eu adipiscing adipiscing vitae in sed a et. Tempus vestibulum non sed pharetra blandit faucibus velit. Fames vitae augue vel libero ultricies congue ultricies. Nunc maecenas sit non nibh ac eu eu ullamcorper. Fermentum odio hendrerit euismod mi malesuada quis ultricies nulla. Amet et fringilla amet fringilla ornare a. Duis elit felis tortor ornare turpis suspendisse vitae mauris. Nam dictumst volutpat posuere nullam amet lobortis.
						</p>
					</div>
				</div>
		</div>
	);
};

export default DetailGame;
