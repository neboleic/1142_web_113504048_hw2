import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { answers } = await request.json();

    let topType = 'A';
    let maxScore = -1;
    for (const [type, score] of Object.entries(answers)) {
      if (score > maxScore) {
        maxScore = score;
        topType = type;
      }
    }

    const resultsData = {
      A: {
        title: '抹茶麻糬',
        image: '/matchamochi.png',
        description: '沉穩內斂的你，喜歡用自己的步調過生活。看似安靜，卻總在關鍵時刻給出最穩的判斷，是朋友默默信賴的存在。',
      },
      B: {
        title: '花生麻糬',
        image: '/peanutmochi.png',
        description: '活力滿滿的你是天生的氣氛擔當！走到哪都把熱情和笑聲帶到哪，大家都忍不住被你感染、想靠近你。',
      },
      C: {
        title: '紅豆麻糬',
        image: '/redbeanmochi.png',
        description: '溫暖體貼的你總是把身邊的人放在心上。你的溫柔像剛煮好的紅豆湯，是所有人最安心的依靠。',
      },
      D: {
        title: '芝麻麻糬',
        image: '/sesamemochi.png',
        description: '低調卻有深度的你，外表內斂，內在卻藏著滿滿的想法與內涵。相處越久，越能發現你獨特的魅力。',
      },
    };

    const finalResult = resultsData[topType] || resultsData['A'];
    return NextResponse.json({ success: true, data: finalResult });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Server Error' },
      { status: 500 }
    );
  }
}