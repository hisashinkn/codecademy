function countdown(){
	const now=new Date();//���̎���
	const tomorrow=new Date(now.getFullYear(),now.getMonth(),now.getDate()+1);//������0:00
	const tomorrow2=new Date(now.getFullYear(),now.getMonth(),now.getTime()+2);//48���Ԍ�?
	const differ=tomorrow.getTime()-now.getTime();//�����܂ł��Ɖ��~���b��

	const msec=Math.floor(differ%1000);//�~���b
	const sec=Math.floor(differ/1000)%60;//�~���b��b��
	const min=Math.floor(differ/1000/60)%60;//1����=60��
	const hour=Math.floor(differ/1000/60/60);

	document.getElementById("hour").textContent=String(hour).padStart(2,"0"); //�ꌅ�ɂȂ�����0�����悤��
	document.getElementById("min").textContent=String(min).padStart(2,"0")
	document.getElementById("sec").textContent=String(sec).padStart(2,"0")
	document.getElementById("msec").textContent=String(msec).padStart(4,"0")
	setTimeout(countdown,1);
}
//���Ƃ́utextContent�v���g����html�������������OK�B

countdown()

