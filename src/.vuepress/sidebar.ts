import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: '',
      icon: 'creative',
      prefix: 'note/',
      children: [
        'chapter_data_structure/', 
        'chapter_array_and_linkedlist/', 
        'chapter_stack_and_queue/'
      ],
    },
  ],

  '/note/': 'structure',
});
