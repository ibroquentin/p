// 2008/7/3 Scripted by K-Factory@migiwa
// 2009/1/27 Modified by K-Factory@migiwa

// *****************************************************************************
str_CenterT = 'Tie!';
str_CenterB = 'Undo last choice';

str_ImgPath = './images/';
// 0:順番に　1:昔の
var bln_ResultMode = 1;
// 0:テキスト　1:イラスト　2:テキスト＋イラスト
var int_ResultImg = 2;
// イラスト表示時、何位までをイラスト表示にするか。
var int_ResultRank = 3;

// ソート用のテーブルを
// 0:残す　1:消す
var bln_ResultStyle = 0;

// ソート進捗バーの表示
// 0:表示　1:消す
var bln_ProgessBar = 1;

// Maximum number of result rows before being broken off into another table.
var maxRows = 35;

// * タイトル情報（編集可能。最後の行に”,”を付けないようにしてください）
var int_Colspan = 3;
var ary_TitleData = [
"Phighters",
"NPCs TBA",
"Swords TBA",
"Others TBA"
];

// * キャラクター情報（編集可能。最後の行に”,”を付けないようにしてください）
// * 使用フラグ（0にするとソートに入りません）,
// "タイトルID"（先頭から0, 1, 2...）,
// {タイトル別参加フラグ}（1を入れると対象タイトルに入ります）,
// "キャラクター名", "画像（空白の場合、キャラクター名が使用されます）"
// [1,2,3,4,5,6,7,8,9,
var ary_CharacterData = [
[1, "Sword", [1,0,0,0], "Sword.png"],
[1, "Banhammer", [1,0,0,0], "Banhammer.png"],
[1, "Skateboard", [1,0,0,0], "Skateboard.png"],
[1, "Biograft", [1,0,0,0], "Biograft.png"],
[1, "Katana", [1,0,0,0], "Katana.png"],
[1, "Rocket", [1,0,0,0], "Eww.png"],
[1, "Slingshot", [1,0,0,0], "Me.png"],
[1, "Hyperlaser", [1,0,0,0], "Hyperlaser.png"],
[1, "Shuriken", [1,0,0,0], "Shuriken.png"],
[1, "Scythe", [1,0,0,0], "Scythe.png"],
[1, "Medkit", [1,0,0,0], "Medkit.png"],
[1, "Boombox", [1,0,0,0], "Boombox.png"],
[1, "Subspace", [1,0,0,0], "Subspace.png"],
[1, "Vine Staff", [1,0,0,0], "VineStaff.png"],
[1, "Coil", [1,0,0,0], "Cutiecake.png"]

  
];
