import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { answers } = body;

    // 1. 找出得分最高的維度
    let highestScoreType = 'A';
    let maxScore = -1;

    for (const [type, score] of Object.entries(answers)) {
      if (score > maxScore) {
        maxScore = score;
        highestScoreType = type;
      }
    }

    // 2. 設定 4 種最終結果的資料
    const resultsData = {
      A: { 
        title: '【傳說中的勇者】', 
        description: '你充滿勇氣，喜歡直面挑戰！不管遇到什麼史萊姆或魔王，你的第一反應永遠是拔劍。' 
      },
      B: { 
        title: '【智慧的魔法師】', 
        description: '你總能冷靜思考，找出最佳解方！對你來說，知識與策略比蠻力更重要。' 
      },
      C: { 
        title: '【神秘的盜賊】', 
        description: '你行動敏捷，不按牌理出牌！沒有你打不開的寶箱，也沒有你逃不掉的陷阱。' 
      },
      D: { 
        title: '【溫柔的治癒師】', 
        description: '你心思細膩，總是照顧著身邊的人！在團隊中，你是所有人最堅強的後盾。' 
      },
    };

    const finalResult = resultsData[highestScoreType] || resultsData['A'];

    // 3. 將結果回傳給前端
    return NextResponse.json({ success: true, data: finalResult });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Server Error' }, { status: 500 });
  }
}