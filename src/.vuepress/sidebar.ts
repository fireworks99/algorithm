import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: '',
      icon: 'creative',
      prefix: 'note/',
      children: [
        '01_chapter_computational_complexity/', // 这里结尾需要添加'/'表示目录
        '02_chapter_data_structure/', 
        '03_chapter_array_and_linkedlist/', 
        '04_chapter_stack_and_queue/'
      ],
    },
  ],

  '/note/': 'structure',
});
