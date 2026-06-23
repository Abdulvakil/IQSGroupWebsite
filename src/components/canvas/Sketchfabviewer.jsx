// components/SketchfabViewer.jsx
import React, { useRef } from "react";

const SketchfabViewer = ({ uid = "731235038f6945d19f10d9331b78ea09" }) => {
	const iframeRef = useRef(null);

	const loadModel = () => {
		if (!iframeRef.current) return;

		const client = new window.Sketchfab(iframeRef.current);

		client.init(uid, {
			success: function (api) {
				console.log("Sketchfab API loaded successfully");
				api.start();
				api.addEventListener("viewerready", function () {
					console.log("Viewer is ready");
					iframeRef.current.classList.remove("hidden");
				});
			},
			error: function () {
				console.error("Sketchfab viewer failed to load");
			},
		});
	};

	return (
		<div style={{ textAlign: "center" }}>
			<button onClick={loadModel}>Load 3D Model</button>
			<iframe
				ref={iframeRef}
				id="api-frame"
				title="Sketchfab Viewer"
				className="hidden"
				src=""
				style={{
					width: "100%",
					height: "600px",
					border: "none",
					transition: "visibility 0.3s ease",
				}}
				allow="autoplay; fullscreen; xr-spatial-tracking"
				sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
				allowFullScreen
				mozAllowFullScreen="true"
				webkitAllowFullScreen="true"
			></iframe>
		</div>
	);
};

export default SketchfabViewer;
