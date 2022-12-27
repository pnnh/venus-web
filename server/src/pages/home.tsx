import React from "react";
import { HeaderPartial } from "./partial/header";
import { MetaPartial } from "./partial/meta";
import { PictureModel } from "../models/picture";

function Item(props: { models: PictureModel[] }) {
    var models = props.models;
    return <>{
        models.map((m, i) => {
            return <div key={i} className="picture-item">
                <div className="picture-preview">
                    <a href="/picture/read/@m.Pk">
                        <vns-img>
                            <img src={m.filePath} alt="@m.Title" />
                        </vns-img>
                    </a>
                </div>
                <div className="picture-info">
                    <span className="update-time"><i className="ri-time-line"></i></span>
                    <span className="views"><i className="ri-eye-line"></i></span>
                </div>
            </div>
        })
    }
    </>
}

function Col() {
    var cols = [0, 1, 2, 3, 4, 5]
    var a: PictureModel = {
        pk: "a", title: "test", filePath: "/files/pictures/1.jpg",
        description: "",
    }
    var b: PictureModel = {
        pk: "b", title: "test", filePath: "/files/pictures/2.jpg",
        description: "",
    }
    var c: PictureModel = {
        pk: "c", title: "test", filePath: "/files/pictures/3.jpg",
        description: "",
    }
    var models = [a, b, c];
    return <>
        {
            cols.map((c, i) => {
                return <div key={i} className="cols">

                    <Item models={models} />
                </div>

            })
        }
    </>
}

export function HomePage() {
    return <html lang="zh">
        <head>
            <MetaPartial />
            <link rel='stylesheet' type='text/css' href='/assets/index.css' />
            <title>启明星</title>
        </head>
        <body className="home">
            <div>
                <HeaderPartial />
                <main>
                    <div className="picture-list">
                        <Col />
                        {/* @for (var col = 0; col < Model.Grid.Count; col++) {
					var range = Model.Grid[col]; 

					<div className="cols">
						@foreach (var m in range) {
							<div className="picture-item"> 
								<div className="picture-preview">
									<a href="/picture/read/@m.Pk">
										<vns-img>
											<img src="@m.FilePath" alt="@m.Title" />
										</vns-img>
									</a>
								</div>
								<div className="picture-info">
									<span className="update-time"><i className="ri-time-line"></i></span>
									<span className="views"><i className="ri-eye-line"></i></span>
								</div> 
							</div>
						}
					</div>
				}    */}



                    </div>
                </main>
            </div>
            <script type='module' src='/assets/index.js'></script>
        </body>
    </html>;
}