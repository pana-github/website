// import { today } from "@internationalized/date";
export const inputLabel = [
  {
    label: "営業所コード",
    name: "officeCode",
    type: "text",
    pattern:
      /^[\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\u4E00-\u6800\u6802-\u6851\u6853-\u9ad8\u9ada-\u9FFF\u3041-\u3096\u30A1-\u30FA（）．＿＋－―ーゞ々／・＆！'：\u3000]+$/,
    message: "有効な値を入力してください。",
  },
  {
    label: "顧客",
    name: "client",
    type: "text",
    pattern:
      /^[\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\u4E00-\u6800\u6802-\u6851\u6853-\u9ad8\u9ada-\u9FFF\u3041-\u3096\u30A1-\u30FA（）．＿＋－―ーゞ々／・＆！'：\u3000]+$/,
    message: "有効な値を入力してください。",
  },
  {
    label: "施設",
    name: "facility",
    type: "text",
    pattern:
      /^[\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\u4E00-\u6800\u6802-\u6851\u6853-\u9ad8\u9ada-\u9FFF\u3041-\u3096\u30A1-\u30FA（）．＿＋－―ーゞ々／・＆！'：\u3000]+$/,
    message: "有効な値を入力してください。",
  },
  {
    label: "コール№",
    name: "callNumber",
    type: "text",
    pattern:
      /^[\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\u4E00-\u6800\u6802-\u6851\u6853-\u9ad8\u9ada-\u9FFF\u3041-\u3096\u30A1-\u30FA（）．＿＋－―ーゞ々／・＆！'：\u3000]+$/,
    message: "有効な値を入力してください。",
  },
  {
    label: "FAX",
    name: "fax",
    type: "fax",
    pattern:
      /^[\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\u4E00-\u6800\u6802-\u6851\u6853-\u9ad8\u9ada-\u9FFF\u3041-\u3096\u30A1-\u30FA（）．＿＋－―ーゞ々／・＆！'：\u3000]+$/,

    message: "有効な値を入力してください。",
  },
  {
    label: "メール",
    name: "mail",
    type: "email",
    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
    message: "有効な値を入力してください。",
  },
];
