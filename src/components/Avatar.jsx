/*
    根据传进来的expression这个prop，决定SVG里哪组五官是亮的（opacity:1），其它全是暗的（opacity:0）。
    
    注意这里没用Framer Motion，纯CSS的transition-opacity就够了
*/
const EXPRESSIONS = ['neutral', 'thinking', 'explaining', 'happy', 'surprised', 'confused'];

export default function Avatar({ expression = 'neutral' }) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <svg viewBox="0 0 300 320" className="w-[60%] max-w-[320px]">
        {/* 天线 + 头部，所有表情共用，不用切换 */}
        <path d="M150,58 Q138,30 128,15" stroke="#3A2417" strokeWidth="5" fill="none" strokeLinecap="round" />
        <circle cx="128" cy="13" r="7" fill="#FFC36E" />
        <path d="M150,55 C205,55 245,90 250,145 C255,205 225,265 150,270 C75,265 45,205 50,145 C55,90 95,55 150,55 Z" fill="#FF8B66" />

        {EXPRESSIONS.map((name) => (
          <g
            key={name}
            className="transition-opacity duration-300"
            style={{ opacity: expression === name ? 1 : 0 }}
          >
            {name === 'neutral' && (
              <>
                <path d="M90,118 Q110,108 130,118" stroke="#3A2417" strokeWidth="6" fill="none" strokeLinecap="round" />
                <path d="M170,118 Q190,108 210,118" stroke="#3A2417" strokeWidth="6" fill="none" strokeLinecap="round" />
                <ellipse cx="110" cy="150" rx="12" ry="14" fill="#3A2417" />
                <ellipse cx="190" cy="150" rx="12" ry="14" fill="#3A2417" />
                <path d="M120,196 Q150,212 180,196" stroke="#3A2417" strokeWidth="6" fill="none" strokeLinecap="round" />
              </>
            )}
            {/* thinking / explaining / happy / surprised / confused 自己往下加，
                坐标可以直接抄之前那个 virtual_avatar_demo.html 里对应表情的<g>内容，
                结构是一样的，跳进去复制就行 */}
          </g>
        ))}
      </svg>
    </div>
  );
}

/* TODO：上面只实现了neutral表情，剩下的五个表情自己加上去，坐标可以直接从之前那个virtual_avatar_demo.html里对应表情的<g>内容复制过来，结构是一样的，跳进去复制就行 */