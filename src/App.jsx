import { useState } from 'react';
import { LayoutGroup, AnimatePresence, motion } from 'framer-motion';
import Avatar from './components/Avatar';

export default function App() {
  const [mediaOpen, setMediaOpen] = useState(false);
  const [expression, setExpression] = useState('neutral');
  const [mediaCaption, setMediaCaption] = useState('');

  return (
    <div className="w-screen h-screen bg-neutral-950 text-white flex overflow-hidden">
      <LayoutGroup>
        <motion.div layout className={`h-full flex-none ${mediaOpen ? 'w-1/3' : 'w-full'}`}>
          <Avatar expression={expression} />
        </motion.div>

        <AnimatePresence>
          {mediaOpen && (
            <motion.div
              key="media"
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-2/3 h-full flex-none border-l border-neutral-800 flex flex-col items-center justify-center relative"
            >
              <button
                onClick={() => setMediaOpen(false)}
                className="absolute top-4 right-4 bg-amber-400 text-black px-4 py-2 rounded-full text-sm font-medium"
              >
                ✕ 收起
              </button>
              <div className="aspect-video w-2/3 bg-neutral-800 rounded-xl" />
              <p className="mt-4 text-sm text-neutral-400">{mediaCaption}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </LayoutGroup>

      {/* 测试用，第三步接上LLM之后这两个按钮就没用了，删掉就行 */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        <button
          onClick={() => { setExpression('happy'); setMediaCaption('示意图占位'); setMediaOpen(true); }}
          className="bg-blue-600 px-4 py-2 rounded-full"
        >
          模拟AI：展示图片
        </button>
        <button onClick={() => setExpression('thinking')} className="bg-neutral-700 px-4 py-2 rounded-full">
          切换表情
        </button>
      </div>
    </div>
  );
}