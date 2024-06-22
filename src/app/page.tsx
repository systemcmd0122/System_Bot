import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* ホーム 上記のアイコン */}
      <div className="icon">
        <Image src="/images/Systm_bot.png" alt="Sample Image" width={70} height={70} />
        &nbsp;&nbsp;System Bot
      </div>
      {/* ボット追加ボタン */}
      <a
        href="https://discord.com/oauth2/authorize?client_id=1254212405668614259&permissions=8&integration_type=0&scope=bot"
        target="_blank"
        className="btn btn-flat position"
      >
        <span>サーバーにSystem Botを追加</span>
      </a>
      {/* 題名 */}
      <div className="title">
        多様なカスタム可能なサーバーを<br />
        System Botとともに!!
      </div>
      <br />
      <div className="description">
        SystemBotでは様々な充実した<br />
        サーバー管理機能が備わっています。<br />
        SystemBotで使用できる便利なプレイリスト機能もご注目ください…
      </div>

      <div className="test">
        現在、当サイトをより便利にするためのアップデートに伴い<br />
        Bot追加以外の機能が利用できなくなっております。<br />
        ご利用の方々にはご迷惑をおかけしますが何卒ご了承ください。
      </div>
      <div className="spase">
        1<br />
        1<br />
      </div>

      <div className="copyright">
        copy right (c){" "}
        <a href="https://github.com/systemcmd0122" target="_blank">
          <span>Tisk_01010100</span>
        </a>
        <br />
        2024/06/21
      </div>
    </main>
  );
}
