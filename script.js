// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
  });
  
  // Listen for the scroll event and log the event data
  lenis.on('scroll', (e) => {
    console.log(e);
  });

function anim() {
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  function files(index) {
    var data = `./videoplayback_000/videoplayback_000.jpg
        ./videoplayback_000/videoplayback_001.jpg
        ./videoplayback_000/videoplayback_002.jpg
        ./videoplayback_000/videoplayback_003.jpg
        ./videoplayback_000/videoplayback_004.jpg
        ./videoplayback_000/videoplayback_005.jpg
        ./videoplayback_000/videoplayback_006.jpg
        ./videoplayback_000/videoplayback_007.jpg
        ./videoplayback_000/videoplayback_008.jpg
        ./videoplayback_000/videoplayback_009.jpg
        ./videoplayback_000/videoplayback_010.jpg
        ./videoplayback_000/videoplayback_011.jpg
        ./videoplayback_000/videoplayback_012.jpg
        ./videoplayback_000/videoplayback_013.jpg
        ./videoplayback_000/videoplayback_014.jpg
        ./videoplayback_000/videoplayback_015.jpg
        ./videoplayback_000/videoplayback_016.jpg
        ./videoplayback_000/videoplayback_017.jpg
        ./videoplayback_000/videoplayback_018.jpg
        ./videoplayback_000/videoplayback_019.jpg
        ./videoplayback_000/videoplayback_020.jpg
        ./videoplayback_000/videoplayback_021.jpg
        ./videoplayback_000/videoplayback_022.jpg
        ./videoplayback_000/videoplayback_023.jpg
        ./videoplayback_000/videoplayback_024.jpg
        ./videoplayback_000/videoplayback_025.jpg
./videoplayback_000/videoplayback_026.jpg
./videoplayback_000/videoplayback_027.jpg
./videoplayback_000/videoplayback_028.jpg
./videoplayback_000/videoplayback_029.jpg
./videoplayback_000/videoplayback_030.jpg
./videoplayback_000/videoplayback_031.jpg
./videoplayback_000/videoplayback_032.jpg
./videoplayback_000/videoplayback_033.jpg
./videoplayback_000/videoplayback_034.jpg
./videoplayback_000/videoplayback_035.jpg
./videoplayback_000/videoplayback_036.jpg
./videoplayback_000/videoplayback_037.jpg
./videoplayback_000/videoplayback_038.jpg
./videoplayback_000/videoplayback_039.jpg
./videoplayback_000/videoplayback_040.jpg
./videoplayback_000/videoplayback_041.jpg
./videoplayback_000/videoplayback_042.jpg
./videoplayback_000/videoplayback_043.jpg
./videoplayback_000/videoplayback_044.jpg
./videoplayback_000/videoplayback_045.jpg
./videoplayback_000/videoplayback_046.jpg
./videoplayback_000/videoplayback_047.jpg
./videoplayback_000/videoplayback_048.jpg
./videoplayback_000/videoplayback_049.jpg
./videoplayback_000/videoplayback_050.jpg
./videoplayback_000/videoplayback_051.jpg
./videoplayback_000/videoplayback_052.jpg
./videoplayback_000/videoplayback_053.jpg
./videoplayback_000/videoplayback_054.jpg
./videoplayback_000/videoplayback_055.jpg
./videoplayback_000/videoplayback_056.jpg
./videoplayback_000/videoplayback_057.jpg
./videoplayback_000/videoplayback_058.jpg
./videoplayback_000/videoplayback_059.jpg
./videoplayback_000/videoplayback_060.jpg
./videoplayback_000/videoplayback_061.jpg
./videoplayback_000/videoplayback_062.jpg
./videoplayback_000/videoplayback_063.jpg
./videoplayback_000/videoplayback_064.jpg
./videoplayback_000/videoplayback_065.jpg
./videoplayback_000/videoplayback_066.jpg
./videoplayback_000/videoplayback_067.jpg
./videoplayback_000/videoplayback_068.jpg
./videoplayback_000/videoplayback_069.jpg
./videoplayback_000/videoplayback_070.jpg
./videoplayback_000/videoplayback_071.jpg
./videoplayback_000/videoplayback_072.jpg
./videoplayback_000/videoplayback_073.jpg
./videoplayback_000/videoplayback_074.jpg
./videoplayback_000/videoplayback_075.jpg
./videoplayback_000/videoplayback_076.jpg
./videoplayback_000/videoplayback_077.jpg
./videoplayback_000/videoplayback_078.jpg
./videoplayback_000/videoplayback_079.jpg
./videoplayback_000/videoplayback_080.jpg
./videoplayback_000/videoplayback_081.jpg
./videoplayback_000/videoplayback_082.jpg
./videoplayback_000/videoplayback_083.jpg
./videoplayback_000/videoplayback_084.jpg
./videoplayback_000/videoplayback_085.jpg
./videoplayback_000/videoplayback_086.jpg
./videoplayback_000/videoplayback_087.jpg
./videoplayback_000/videoplayback_088.jpg
./videoplayback_000/videoplayback_089.jpg
./videoplayback_000/videoplayback_090.jpg
./videoplayback_000/videoplayback_091.jpg
./videoplayback_000/videoplayback_092.jpg
./videoplayback_000/videoplayback_093.jpg
./videoplayback_000/videoplayback_094.jpg
./videoplayback_000/videoplayback_095.jpg
./videoplayback_000/videoplayback_096.jpg
./videoplayback_000/videoplayback_097.jpg
./videoplayback_000/videoplayback_098.jpg
./videoplayback_000/videoplayback_099.jpg
./videoplayback_000/videoplayback_100.jpg
./videoplayback_000/videoplayback_101.jpg
./videoplayback_000/videoplayback_102.jpg
./videoplayback_000/videoplayback_103.jpg
./videoplayback_000/videoplayback_104.jpg
./videoplayback_000/videoplayback_105.jpg
./videoplayback_000/videoplayback_106.jpg
./videoplayback_000/videoplayback_107.jpg
./videoplayback_000/videoplayback_108.jpg
./videoplayback_000/videoplayback_109.jpg
./videoplayback_000/videoplayback_110.jpg
./videoplayback_000/videoplayback_111.jpg
./videoplayback_000/videoplayback_112.jpg
./videoplayback_000/videoplayback_113.jpg
./videoplayback_000/videoplayback_114.jpg
./videoplayback_000/videoplayback_115.jpg
./videoplayback_000/videoplayback_116.jpg
./videoplayback_000/videoplayback_117.jpg
./videoplayback_000/videoplayback_118.jpg
./videoplayback_000/videoplayback_119.jpg
./videoplayback_000/videoplayback_120.jpg
./videoplayback_000/videoplayback_121.jpg
./videoplayback_000/videoplayback_122.jpg
./videoplayback_000/videoplayback_123.jpg
./videoplayback_000/videoplayback_124.jpg
./videoplayback_000/videoplayback_125.jpg
./videoplayback_000/videoplayback_126.jpg
./videoplayback_000/videoplayback_127.jpg
./videoplayback_000/videoplayback_128.jpg
./videoplayback_000/videoplayback_129.jpg
./videoplayback_000/videoplayback_130.jpg
./videoplayback_000/videoplayback_131.jpg
./videoplayback_000/videoplayback_132.jpg
./videoplayback_000/videoplayback_133.jpg
./videoplayback_000/videoplayback_134.jpg
./videoplayback_000/videoplayback_135.jpg
./videoplayback_000/videoplayback_136.jpg
./videoplayback_000/videoplayback_137.jpg
./videoplayback_000/videoplayback_138.jpg
./videoplayback_000/videoplayback_139.jpg
./videoplayback_000/videoplayback_140.jpg
./videoplayback_000/videoplayback_141.jpg
./videoplayback_000/videoplayback_142.jpg
./videoplayback_000/videoplayback_143.jpg
./videoplayback_000/videoplayback_144.jpg
./videoplayback_000/videoplayback_145.jpg
./videoplayback_000/videoplayback_146.jpg
./videoplayback_000/videoplayback_147.jpg
./videoplayback_000/videoplayback_148.jpg
./videoplayback_000/videoplayback_149.jpg
./videoplayback_000/videoplayback_150.jpg
./videoplayback_000/videoplayback_151.jpg
./videoplayback_000/videoplayback_152.jpg
./videoplayback_000/videoplayback_153.jpg
./videoplayback_000/videoplayback_154.jpg
./videoplayback_000/videoplayback_155.jpg
./videoplayback_000/videoplayback_156.jpg
./videoplayback_000/videoplayback_157.jpg
./videoplayback_000/videoplayback_158.jpg
./videoplayback_000/videoplayback_159.jpg
./videoplayback_000/videoplayback_160.jpg
./videoplayback_000/videoplayback_161.jpg
./videoplayback_000/videoplayback_162.jpg
./videoplayback_000/videoplayback_163.jpg
./videoplayback_000/videoplayback_164.jpg
./videoplayback_000/videoplayback_165.jpg
./videoplayback_000/videoplayback_166.jpg
./videoplayback_000/videoplayback_167.jpg
./videoplayback_000/videoplayback_168.jpg
./videoplayback_000/videoplayback_169.jpg
./videoplayback_000/videoplayback_170.jpg
./videoplayback_000/videoplayback_171.jpg
./videoplayback_000/videoplayback_172.jpg
./videoplayback_000/videoplayback_173.jpg
./videoplayback_000/videoplayback_174.jpg
./videoplayback_000/videoplayback_175.jpg
`;
return data.split('\n')[index]
  }

  const frameCount = 176;

  const images = [];
  const imageSeq = {
    frame: 0,
  }

  for (let i=0; i<frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: 'frame',
    ease: 'none',
    scrollTrigger:{
        trigger: "#main",
        scrub: true,
        pin: true,
        // markers: true,
        start: "bottom 100%",
        end: "500% 0%",
    },
    onUpdate: render
  })

  images[0].onload = render;

  function render(){
    scaleImage(images[imageSeq.frame], context)
  }

  function scaleImage(img, ctx){
    var canvas = ctx.canvas;
    var hRatio = canvas.width/img.width;
    var vRatio = canvas.height/img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, img.width, img.height);
    ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width*ratio, img.height*ratio);
  }


}

anim();
