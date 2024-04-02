import { useSignal } from "@preact/signals";
import Icon from "../../../components/ui/Icon.tsx";
import Button from "../../../components/ui/Button.tsx";
import { sendEvent } from "../../../sdk/analytics.tsx";

export interface Props {
  productID: string;
  productGroupID?: string;
  variant?: "icon" | "full";
  removeItem: () => Promise<void>;
  addItem: () => Promise<void>;
  loading: boolean;
  inWishlist: boolean;
  isUserLoggedIn: boolean;
}

function ButtonCommon({
  variant = "icon",
  productGroupID,
  productID,
  loading,
  inWishlist,
  isUserLoggedIn,
  removeItem,
  addItem,
}: Props) {
  const fetching = useSignal(false);

  return (
    <Button
      class={variant === "icon"
        ? "btn-circle btn-ghost gap-2"
        : "btn-primary btn-outline gap-2"}
      loading={fetching.value}
      aria-label="Add to wishlist"
      onClick={async (e) => {
        e.stopPropagation();
        e.preventDefault();

        if (!isUserLoggedIn) {
          globalThis.window.alert(
            "Please log in before adding to your wishlist",
          );

          return;
        }

        if (loading) {
          return;
        }

        try {
          fetching.value = true;

          if (inWishlist) {
            await removeItem();
          } else if (productID && productGroupID) {
            await addItem();

            sendEvent({
              name: "add_to_wishlist",
              params: {
                items: [
                  {
                    item_id: productID,
                    item_group_id: productGroupID,
                    quantity: 1,
                  },
                ],
              },
            });
          }
        } finally {
          fetching.value = false;
        }
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.0"
        width="24"
        height="24"
        viewBox="52 177 642 656"
      >
        <defs id="defs668">
          <linearGradient
            x1="0"
            y1="0"
            x2="1"
            y2="0"
            id="linearGradient695"
            gradientUnits="objectBoundingBox"
            spreadMethod="pad"
          >
            <stop
              style="stop-color:#ff0000;stop-opacity:1"
              offset="0"
              id="stop696"
            />
            <stop
              style="stop-color:#ffd700;stop-opacity:1"
              offset="1"
              id="stop697"
            />
          </linearGradient>
          <linearGradient
            x1="0"
            y1="0"
            x2="1"
            y2="0"
            id="linearGradient691"
            gradientUnits="objectBoundingBox"
            spreadMethod="pad"
          >
            <stop
              style="stop-color:#000000;stop-opacity:1"
              offset="0"
              id="stop692"
            />
            <stop
              style="stop-color:#ffffff;stop-opacity:1"
              offset="1"
              id="stop693"
            />
          </linearGradient>
          <linearGradient
            x1="0"
            y1="1.5000001e-007"
            x2="1"
            y2="1.5000001e-007"
            id="linearGradient694"
            xlink:href="#linearGradient695"
            gradientUnits="objectBoundingBox"
            spreadMethod="pad"
          />
          <radialGradient
            cx="0.5"
            cy="0.50000018"
            r="0.5"
            fx="0.5"
            fy="0.50000018"
            id="radialGradient698"
            xlink:href="#linearGradient695"
            gradientUnits="objectBoundingBox"
            spreadMethod="pad"
          />
          <linearGradient
            x1="0"
            y1="0"
            x2="1"
            y2="0"
            id="linearGradient567"
            xlink:href="#linearGradient695"
            gradientUnits="objectBoundingBox"
            spreadMethod="pad"
          />
        </defs>
        <path
          d="M 219.069,653.065 L 211.021,766.978 C 214.646,781.479 225.522,792.354 242.613,793.39 C 259.703,794.427 269.025,783.551 276.276,774.747 L 283.807,695.533"
          transform="translate(-10.61289,-3.411667)"
          style="font-size:12px;fill:#9999ff;fill-rule:evenodd;stroke:#000000;stroke-width:2.5"
          id="inferior_vena_cava"
        />
        <path
          d="M 132.938,385.437 C 154.176,385.086 288.568,393.596 348.881,392.036 C 409.194,390.476 553.266,372.917 577.703,376.037 L 578.223,424.912 C 555.866,425.952 510.582,427.392 500.185,448.71 C 485.626,482.506 409.714,435.192 370.719,436.232 C 327.046,437.38 162.372,439.453 133.458,435.871 C 127.813,430.433 120.845,424.463 121.499,410.394 C 121.647,394.289 127.218,390.117 132.938,385.437 z "
          transform="translate(6.239319,58.23346)"
          style="font-size:12px;fill:#ffcc99;fill-rule:evenodd;stroke:#000000;stroke-width:2.5"
          id="pulmonary_vein_2"
        />
        <path
          d="M 508.573,484.232 C 518.413,485.267 562.952,567.613 560.362,633.903 C 557.773,700.194 544.307,742.661 523.074,735.928 C 501.84,729.196 449.532,633.386 422.084,603.348 C 394.636,573.31 357.865,535.503 357.865,535.503 L 508.573,484.232 z "
          style="font-size:12px;fill:#7f7fe6;fill-rule:evenodd;stroke:#000000;stroke-width:1.25"
          id="left_ventricle"
        />
        <path
          d="M 154.739,383.037 C 175.977,382.686 315.605,394.116 375.918,392.556 C 436.231,390.996 538.14,377.997 562.577,381.117 L 563.097,429.992 C 540.74,431.032 510.582,427.392 500.185,448.71 C 485.626,482.506 409.714,435.192 370.719,436.232 C 327.046,437.38 184.173,437.053 155.259,433.471 C 149.614,426.993 143.166,424.143 143.3,407.994 C 142.914,391.893 149.539,388.757 154.739,383.037 z "
          style="font-size:12px;fill:#ffcc99;fill-rule:evenodd;stroke:#000000;stroke-width:2.5"
          id="pulmonary_vein_1"
        />
        <path
          d="M 368.742,443.317 C 376.4,402.472 446.107,397.052 470.766,412.245 C 504.111,432.788 523.074,494.589 523.074,494.589 C 523.074,494.589 501.18,491.901 489.929,508.055 C 480.981,520.903 480.089,550.522 480.089,550.522 C 480.089,550.522 472.838,521.52 457.301,516.341 C 441.765,511.162 428.817,516.859 417.941,520.484 C 407.583,511.162 363.971,468.762 368.742,443.317 z "
          style="font-size:12px;fill:#b3b3ff;fill-rule:evenodd;stroke-width:1pt"
          id="left_atrium"
        />
        <path
          d="M 353.723,537.057 C 394.118,562.434 416.905,602.312 445.907,641.672 C 474.91,681.032 511.162,736.964 500.286,746.804 C 489.411,756.644 406.862,752.239 339.739,729.196 C 286.344,710.881 240.821,665.495 240.821,665.495 L 353.723,537.057 z "
          style="font-size:12px;fill:#7f7fe6;fill-rule:evenodd;stroke-width:1.25"
          id="right_ventricle"
        />
        <path
          d="M 215.962,423.12 C 216.48,438.657 189.079,547.46 192.139,576.417 C 198.872,640.636 251.179,682.068 260.501,687.247 C 262.573,680.514 263.609,647.886 282.253,639.082 C 300.897,630.278 324.202,643.225 324.202,643.225 C 324.202,643.225 309.184,624.064 309.184,606.972 C 309.184,589.883 322.648,576.935 328.345,571.238 C 329.381,557.255 332.488,513.752 321.612,482.678 C 310.737,451.604 278.11,413.798 278.11,413.798 L 215.962,423.12 z "
          style="font-size:12px;fill:#b3b3ff;fill-rule:evenodd;stroke-width:1pt"
          id="right_atrium"
        />
        <path
          d="M 296.236,340.775 C 263.091,339.739 177.778,328.83 160.007,326.794 C 153.594,328.846 147.768,335.896 147.528,349.587 C 147.34,360.736 154.114,365.649 160.007,370.301 C 160.007,370.301 263.608,382.206 295.2,386.349"
          transform="translate(-0.517883,0.517853)"
          style="font-size:12px;fill:#e5b3ff;fill-rule:evenodd;stroke:#000000;stroke-width:2.5"
          id="pulmonary_artery_2"
        />
        <path
          d="M 434.002,525.693 C 410.223,485.324 369.24,470.051 341.811,400.333 C 326.882,361.657 362.68,306.047 401.887,334.042 C 425.817,351.499 409.611,392.825 414.272,390.754 L 468.371,386.129 C 468.371,380.95 469.73,372.884 456.783,320.577 C 448.471,287.661 430.888,284.842 435.031,268.787 C 439.174,252.732 451.086,237.714 451.086,237.714 L 424.156,216.998 C 424.156,216.998 403.958,265.162 395.671,264.126 C 387.385,263.09 399.815,215.962 399.815,215.962 L 362.526,212.855 C 362.526,212.855 367.706,262.055 356.83,269.824 C 345.954,277.592 322.131,220.623 322.131,220.623 L 293.646,237.714 C 293.646,237.714 313.844,261.536 309.183,283.288 C 304.522,305.04 272.931,325.756 276.556,400.333 C 279.349,457.383 325.739,497.517 343.365,520.485 C 360.455,542.236 399.232,587.682 411.254,581.659 C 406.523,557.756 414.725,531.305 434.002,525.693 z "
          style="font-size:12px;fill:#ff7f7f;fill-rule:evenodd;stroke:#000000;stroke-width:2.5"
          id="aorta"
        />
        <path
          d="M 393.806,563.203 C 393.806,576.12 376.123,577.424 354.762,577.939 C 336.281,578.385 326.183,570.688 326.183,557.772 C 326.183,544.857 335.587,536.124 359.736,536.124 C 382.193,536.124 393.806,550.289 393.806,563.203 z "
          transform="matrix(0.578761,-0.718335,1.263224,1.017777,-506.8972,229.5155)"
          style="font-size:12px;fill:#cc6666;fill-rule:evenodd;stroke:#000000;stroke-width:2.04364991"
          id="path592"
        />
        <path
          d="M 208.712,427.781 C 214.408,409.137 204.338,245.12 204.338,245.12 C 204.338,245.12 210.553,230.1 235.93,231.136 C 261.306,232.172 265.968,248.745 265.968,248.745 L 279.145,422.084"
          style="font-size:12px;fill:#9999ff;fill-rule:evenodd;stroke:#000000;stroke-width:2.5"
          id="superior_vena_cava"
        />
        <ellipse
          cx="250.87192"
          cy="434.41135"
          rx="31.456482"
          ry="21.057648"
          transform="matrix(1.049425,-0.353733,0.378566,1.123099,-181.7923,31.88649)"
          style="font-size:12px;fill:#7f7fcc;fill-rule:evenodd;stroke:#000000;stroke-width:2.1821599"
          id="vena_cava_in_2"
        />
        <path
          d="M 389.377,422.836 L 393.817,404.594 C 417.574,392.693 442.843,393.36 460.113,399.515 C 513.247,419.181 518.56,475.733 534.101,489.889 C 602.785,553.949 615.862,742.02 560.662,765.287 C 445.615,813.474 252.131,730.14 202.022,647.172 C 149.112,560.772 203.302,504.387 208.806,425.868 L 214.21,447.36 C 215.758,530.82 193.679,509.553 206.785,590.738 C 216.978,629.328 247.972,674.291 305.079,699.226 C 379.711,732.765 476.186,748.01 485.652,736.36 C 495.117,724.711 441.238,682.48 426.675,648.259 C 412.113,614.037 412.113,600.931 402.647,590.738 C 393.182,580.544 383.923,565.046 375.604,557.766 L 375.606,543.103 C 389.125,557.661 413.963,588.784 430.316,599.475 C 449.974,611.853 476.789,641.332 487.108,665.005 C 500.214,693.402 517.689,725.439 529.339,715.974 C 540.989,706.508 548.998,665.734 540.989,627.873 C 536.041,605.385 519.348,588.817 513.319,549.964 C 506.767,509.917 514.777,493.171 511.864,482.249 C 508.952,471.328 492.205,430.553 463.808,415.991 C 436.963,403.601 410.492,412.642 389.377,422.836 z "
          style="font-size:12px;opacity:0.98999999;fill:#ff7fcc;fill-rule:evenodd;stroke:#000000;stroke-width:2.5"
          id="heart"
        />
        <path
          d="M 385.834,569.669 C 372.28,507.979 380.652,432.959 408.1,389.975 C 435.549,346.989 540.682,358.901 540.682,358.901 L 540.682,322.13 C 521.002,320.577 463.934,318.303 427.264,328.863 C 381.532,341.805 362.526,316.433 344.918,352.168 C 333.3,375.403 341.293,394.636 336.114,413.28 C 330.935,431.924 316.435,536.539 322.13,572.791 C 342.392,560.243 364.058,555.037 385.834,569.669 z "
          transform="translate(0,0.517853)"
          style="font-size:12px;fill:#e5b3ff;fill-rule:evenodd;stroke:#000000;stroke-width:2.5"
          id="pulmonary_artery_1"
        />
        <ellipse
          cx="548.70959"
          cy="341.55151"
          rx="13.724213"
          ry="19.938919"
          transform="matrix(0.849057,0,0,0.935062,76.60906,21.92059)"
          style="font-size:12px;fill:#b37fe6;fill-rule:evenodd;stroke:#000000;stroke-width:2.80576992"
          id="path564"
        />
        <path
          d="M 259.451,669.164 C 249.261,666.386 251.299,642.357 275.569,632.769 C 295.829,624.246 307.805,631.729 324.963,643.168 C 308.845,641.088 300.162,635.141 281.289,645.768 C 263.891,656.083 267.386,670.807 259.451,669.164 z "
          style="font-size:12px;fill:#ffffff;fill-rule:evenodd;stroke:#000000;stroke-width:2.5;stroke-linejoin:round"
          id="tricuspid_valve_1"
        />
        <path
          d="M 262.508,666.93 C 251.999,665.874 251.299,642.357 275.569,632.769 C 295.829,624.246 307.805,631.729 324.963,643.168 C 308.845,641.088 297.853,634.868 278.98,645.495 C 261.582,655.81 272.711,667.484 262.508,666.93 z "
          transform="matrix(0.339116,0.940745,0.940745,-0.339116,-389.9721,555.9836)"
          style="font-size:12px;fill:#ffffff;fill-rule:evenodd;stroke:#000000;stroke-width:2.5;stroke-linejoin:round"
          id="tricuspid_valve_2"
        />
        <path
          d="M 261.127,654.534 C 250.792,652.358 258.258,640.148 274.486,632.345 C 289.046,625.201 307.805,631.729 324.963,643.168 C 308.845,641.088 295.37,635.258 280.747,642.058 C 262.485,650.754 276.341,658.257 261.127,654.534 z "
          transform="matrix(0.743056,0.669229,-0.669229,0.743056,670.4603,-146.6114)"
          style="font-size:12px;fill:#ffffff;fill-rule:evenodd;stroke:#000000;stroke-width:2.5;stroke-linejoin:round"
          id="mitral_valve_1"
        />
        <path
          d="M 260.676,652.145 C 250.516,649.261 257.133,636.313 273.947,629.862 C 294.301,621.566 307.805,631.729 324.963,643.168 C 308.845,641.088 296.468,631.02 277.456,641.397 C 266.462,647.024 271.842,654.778 260.676,652.145 z "
          transform="matrix(-0.377592,0.925973,0.925973,0.377592,8.608642,5.534943)"
          style="font-size:12px;fill:#ffffff;fill-rule:evenodd;stroke:#000000;stroke-width:2.5;stroke-linejoin:round"
          id="mitral_valve_2"
        />
        <path
          d="M 394.854,561.9 C 394.854,574.816 383.243,575.808 361.882,576.323 C 343.401,576.769 324.964,572.893 324.964,559.977 C 324.964,547.062 334.915,526.965 359.064,526.965 C 381.521,526.965 394.854,548.985 394.854,561.9 z "
          transform="matrix(0.92248,0,0,1.622222,21.03153,-346.8703)"
          style="font-size:12px;fill:#b37fe6;fill-rule:evenodd;stroke:#000000;stroke-width:2.04364991"
          id="path591"
        />
        <path
          d="M 288.941,683.295 C 250.535,672.863 256.755,643.017 274.147,638.896 C 288.539,636.081 319.906,648.527 328.838,673.218 C 317.005,663.579 306.016,657.815 295.711,664.789 C 282.163,673.019 301.403,686.658 288.941,683.295 z "
          transform="matrix(0.205976,-0.612018,-0.568278,-0.254675,649.0895,906.7903)"
          style="font-size:12px;fill:#ffffff;fill-rule:evenodd;stroke:#000000;stroke-width:3.95160007;stroke-linejoin:round"
          id="pulmonary_valve_1"
        />
        <path
          d="M 273.031,676.614 C 262.932,673.697 249.909,653.345 270.94,640.478 C 284.031,632.844 319.906,648.527 328.838,673.218 C 317.005,663.579 309.045,660.743 292.351,662.657 C 277.271,664.905 285.335,680.427 273.031,676.614 z "
          transform="matrix(-0.205976,-0.612018,0.568278,-0.254675,57.71602,908.3502)"
          style="font-size:12px;fill:#ffffff;fill-rule:evenodd;stroke:#000000;stroke-width:3.95160007;stroke-linejoin:round"
          id="pulmonary_valve_2"
        />
        <path
          d="M 286.864,677.122 C 253.045,674.145 256.755,643.017 274.147,638.896 C 288.539,636.081 319.906,648.527 328.838,673.218 C 317.005,663.579 303.182,653.947 292.877,660.921 C 279.329,669.151 299.84,678.525 286.864,677.122 z "
          transform="matrix(-0.334885,-0.552127,-0.561135,0.27005,874.679,543.3607)"
          style="font-size:12px;fill:#ffffff;fill-rule:evenodd;stroke:#000000;stroke-width:3.95160007;stroke-linejoin:round"
          id="aortic_valve_1"
        />
        <path
          d="M 278.697,675.236 C 265.488,673.552 256.021,653.528 277.052,640.661 C 290.143,633.027 319.906,648.527 328.838,673.218 C 317.005,663.579 313.156,659.982 296.462,661.896 C 281.382,664.144 291.534,677.294 278.697,675.236 z "
          transform="matrix(-0.600568,-0.237298,0.171871,-0.598548,491.3536,993.7164)"
          style="font-size:12px;fill:#ffffff;fill-rule:evenodd;stroke:#000000;stroke-width:3.95160007;stroke-linejoin:round"
          id="aortic_valve_2"
        />
        <ellipse
          cx="250.87192"
          cy="434.41135"
          rx="31.456482"
          ry="21.057648"
          transform="matrix(0.717389,-0.744054,0.95079,0.71512,-339.4749,428.6958)"
          style="font-size:12px;fill:#7f7fcc;fill-rule:evenodd;stroke:#000000;stroke-width:2.26296997"
          id="vena_cava_in_1"
        />
        <ellipse
          cx="382.15723"
          cy="216.81569"
          rx="20.277725"
          ry="12.478638"
          transform="matrix(0.945601,7.752258e-2,-6.628828e-2,0.83062,34.12192,2.938736)"
          style="font-size:12px;fill:#cc6666;fill-rule:evenodd;stroke:#000000;stroke-width:2.81170011"
          id="path597"
        />
        <ellipse
          cx="382.15723"
          cy="216.81569"
          rx="20.277725"
          ry="12.478638"
          transform="matrix(0.732703,0.515286,-0.464454,0.626108,260.8245,-108.0556)"
          style="font-size:12px;fill:#cc6666;fill-rule:evenodd;stroke:#000000;stroke-width:2.99218011"
          id="path598"
        />
        <ellipse
          cx="382.15723"
          cy="216.81569"
          rx="20.277725"
          ry="12.478638"
          transform="matrix(0.740708,-0.430883,0.327749,0.711617,-47.10216,238.3697)"
          style="font-size:12px;fill:#cc6666;fill-rule:evenodd;stroke:#000000;stroke-width:3.05806994"
          id="path599"
        />
        <ellipse
          cx="571.41608"
          cy="405.03461"
          rx="15.078308"
          ry="25.477158"
          transform="matrix(1,0,0,0.969388,-7.799148,12.65858)"
          style="font-size:12px;fill:#e69966;fill-rule:evenodd;stroke:#000000;stroke-width:2.53917003"
          id="path602"
        />
        <ellipse
          cx="571.41608"
          cy="405.03461"
          rx="15.078308"
          ry="25.477158"
          transform="matrix(1,0,0,0.969388,11.3264,66.41187)"
          style="font-size:12px;fill:#e69966;fill-rule:evenodd;stroke:#000000;stroke-width:2.53917003"
          id="path603"
        />
        <ellipse
          cx="571.41608"
          cy="405.03461"
          rx="15.078308"
          ry="25.477158"
          transform="matrix(1.145182,1.541563,-0.876179,0.146717,162.2962,-494.4513)"
          style="font-size:12px;fill:#e69966;fill-rule:evenodd;stroke:#000000;stroke-width:2.02863002"
          id="path604"
        />
        <text
          x="228.29475"
          y="204.53149"
          style="font-size:20px;font-weight:normal;text-anchor:middle;stroke-width:1pt;font-family:Nimbus Sans L"
          id="text680"
        >
          <tspan x="228.29475" y="204.53149" id="tspan697">Superior</tspan>
          <tspan x="228.29475" y="224.53149" id="tspan699">vena cava</tspan>
        </text>
        <text
          x="371.72159"
          y="304.67572"
          style="font-size:20px;font-weight:normal;text-anchor:middle;stroke-width:1pt;font-family:Nimbus Sans L"
          id="text704"
        >
          <tspan id="tspan705">Aorta</tspan>
        </text>
        <text
          x="588.98352"
          y="313.16226"
          style="font-size:20px;font-weight:normal;text-anchor:middle;stroke-width:1pt;font-family:Nimbus Sans L"
          id="text707"
        >
          <tspan id="tspan708">Pulmonary</tspan>
          <tspan x="588.98352" y="333.16226" id="tspan712">artery</tspan>
        </text>
        <text
          x="628.87134"
          y="391.24081"
          style="font-size:20px;font-weight:normal;text-anchor:middle;stroke-width:1pt;font-family:Nimbus Sans L"
          id="text714"
        >
          <tspan id="tspan715">Pulmonary</tspan>
          <tspan x="628.87134" y="411.24081" id="tspan717">vein</tspan>
        </text>
        <text
          x="372.57022"
          y="659.42365"
          style="font-size:20px;font-weight:normal;text-anchor:middle;stroke-width:1pt;font-family:Nimbus Sans L"
          id="text719"
        >
          <tspan id="tspan720">Right</tspan>
          <tspan x="372.57022" y="679.42365" id="tspan722">ventricle</tspan>
        </text>
        <text
          x="496.88922"
          y="605.08301"
          style="font-size:20px;font-weight:normal;text-anchor:middle;stroke-width:1pt;font-family:Nimbus Sans L"
          id="text724"
        >
          <tspan id="tspan725">Left</tspan>
          <tspan x="496.88922" y="625.08301" id="tspan727">ventricle</tspan>
        </text>
        <text
          x="257.9985"
          y="487.14169"
          style="font-size:20px;font-weight:normal;text-anchor:middle;stroke-width:1pt;font-family:Nimbus Sans L"
          id="text729"
        >
          <tspan id="tspan730">Right</tspan>
          <tspan x="257.9985" y="507.14169" id="tspan732">atrium</tspan>
        </text>
        <text
          x="415.70731"
          y="451.9516"
          style="font-size:20px;font-weight:normal;text-anchor:middle;stroke-width:1.25;stroke-dashoffset:0;font-family:Nimbus Sans L"
          id="text734"
        >
          <tspan style="stroke-dashoffset:0" id="tspan735">Left</tspan>
          <tspan
            x="415.70731"
            y="471.9516"
            style="stroke-dashoffset:0"
            id="tspan737"
          >
            atrium
          </tspan>
        </text>
        <text
          x="235.0842"
          y="813.88324"
          style="font-size:20px;font-weight:normal;text-anchor:middle;stroke-width:1pt;font-family:Nimbus Sans L"
          id="text739"
        >
          <tspan id="tspan740">Inferior vena cava</tspan>
        </text>
        <text
          x="655.84094"
          y="502.05908"
          style="font-size:20px;font-weight:normal;text-anchor:middle;stroke-width:1pt;font-family:Nimbus Sans L"
          id="text742"
        >
          <tspan id="tspan743">Mitral</tspan>
          <tspan x="655.84094" y="522.05908" id="tspan745">valve</tspan>
        </text>
        <text
          x="656.68958"
          y="603.04462"
          style="font-size:20px;font-weight:normal;text-anchor:middle;stroke-width:1pt;font-family:Nimbus Sans L"
          id="text747"
        >
          <tspan id="tspan748">Aortic</tspan>
          <tspan x="656.68958" y="623.04462" id="tspan750">valve</tspan>
        </text>
        <text
          x="124.75587"
          y="674.69983"
          style="font-size:20px;font-weight:normal;text-anchor:middle;stroke-width:1pt;font-family:Nimbus Sans L"
          id="text752"
        >
          <tspan id="tspan753">Tricuspid</tspan>
          <tspan x="124.75587" y="694.69983" id="tspan755">valve</tspan>
        </text>
        <text
          x="116.26906"
          y="605.95679"
          style="font-size:20px;font-weight:normal;text-anchor:middle;stroke-width:1pt;font-family:Nimbus Sans L"
          id="text757"
        >
          <tspan id="tspan758">Pulmonary</tspan>
          <tspan x="116.26906" y="625.95679" id="tspan760">valve</tspan>
        </text>
        <path
          d="M 621.688,505.205 L 470.168,506.661"
          style="font-size:12px;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:2.5;stroke-dasharray:2.5, 2.5;stroke-dashoffset:0"
          id="path764"
        />
        <path
          d="M 628.495,592.43 L 417.55,546.55"
          style="font-size:12px;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:2.5;stroke-dasharray:2.5, 2.5;stroke-dashoffset:0"
          id="path765"
        />
        <path
          d="M 234.042,309.73 L 236.742,348.136 L 230.741,348.736 L 241.543,362.839 L 247.544,346.336 L 241.843,346.936 L 238.543,309.129 L 234.042,309.73 z "
          style="font-size:12px;fill:#ffffff;fill-rule:evenodd;stroke-width:1.25"
          id="path766"
        />
        <path
          d="M 234.042,309.73 L 236.742,348.136 L 230.741,348.736 L 241.543,362.839 L 247.544,346.336 L 241.843,346.936 L 238.543,309.129 L 234.042,309.73 z "
          transform="matrix(-0.979548,-0.201212,0.201212,-0.979548,398.5885,1109.285)"
          style="font-size:12px;fill:#ffffff;fill-rule:evenodd;stroke-width:1.25"
          id="path767"
        />
        <path
          d="M 234.042,309.73 L 236.742,348.136 L 230.741,348.736 L 241.543,362.839 L 247.544,346.336 L 241.843,346.936 L 238.543,309.129 L 234.042,309.73 z "
          transform="matrix(-0.979548,-0.201212,0.201212,-0.979548,523.4108,811.6318)"
          style="font-size:12px;fill:#ffffff;fill-rule:evenodd;stroke-width:1.25"
          id="path768"
        />
        <path
          d="M 234.042,309.73 L 236.742,348.136 L 230.741,348.736 L 241.543,362.839 L 247.544,346.336 L 241.843,346.936 L 238.543,309.129 L 234.042,309.73 z "
          transform="matrix(0.88044,-0.474159,0.474159,0.88044,-90.06573,418.2473)"
          style="font-size:12px;fill:#ffffff;fill-rule:evenodd;stroke-width:1.25"
          id="path769"
        />
        <path
          d="M 157.854,615.292 L 353.051,559.279"
          style="font-size:12px;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:2.5;stroke-dasharray:2.5, 2.5;stroke-dashoffset:0"
          id="path762"
        />
        <path
          d="M 234.042,309.73 L 236.742,348.136 L 230.741,348.736 L 241.543,362.839 L 247.544,346.336 L 241.843,346.936 L 238.543,309.129 L 234.042,309.73 z "
          transform="matrix(0.998291,-5.843441e-2,5.843441e-2,0.998291,208.5795,161.5294)"
          style="font-size:12px;fill:#ffffff;fill-rule:evenodd;stroke-width:1.25"
          id="path770"
        />
        <path
          d="M 172.282,663.667 L 293.643,619.536"
          style="font-size:12px;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:2.5;stroke-dasharray:2.5, 2.5;stroke-dashoffset:0"
          id="path763"
        />
        <path
          d="M 234.042,309.73 L 236.742,348.136 L 230.741,348.736 L 241.543,362.839 L 247.544,346.336 L 241.843,346.936 L 238.543,309.129 L 234.042,309.73 z "
          transform="matrix(5.605156e-2,0.998428,-0.998428,5.605156e-2,841.2258,149.0546)"
          style="font-size:12px;fill:#ffffff;fill-rule:evenodd;stroke-width:1.25"
          id="path771"
        />
        <path
          d="M 234.042,309.73 L 236.742,348.136 L 230.741,348.736 L 241.543,362.839 L 247.544,346.336 L 241.843,346.936 L 238.543,309.129 L 234.042,309.73 z "
          transform="matrix(0.134782,-0.990876,0.990876,0.134782,-187.9731,599.1196)"
          style="font-size:12px;fill:#ffffff;fill-rule:evenodd;stroke-width:1.25"
          id="path772"
        />
        <path
          d="M 234.042,309.73 L 236.742,348.136 L 230.741,348.736 L 241.543,362.839 L 247.544,346.336 L 241.843,346.936 L 238.543,309.129 L 234.042,309.73 z "
          transform="matrix(0.134782,-0.990876,0.990876,0.134782,-201.1755,660.3306)"
          style="font-size:12px;fill:#ffffff;fill-rule:evenodd;stroke-width:1.25"
          id="path773"
        />
        <path
          d="M 234.042,309.73 L 236.742,348.136 L 230.741,348.736 L 241.543,362.839 L 247.544,346.336 L 241.843,346.936 L 238.543,309.129 L 234.042,309.73 z "
          transform="matrix(-1.094323e-3,1,-1,-1.094323e-3,888.4628,220.6865)"
          style="font-size:12px;fill:#ffffff;fill-rule:evenodd;stroke-width:1.25"
          id="path774"
        />
        <path
          d="M 234.042,309.73 L 236.742,348.136 L 230.741,348.736 L 241.543,362.839 L 247.544,346.336 L 241.843,346.936 L 238.543,309.129 L 234.042,309.73 z "
          transform="matrix(-0.997982,-6.349348e-2,6.349348e-2,-0.997982,569.9086,945.3885)"
          style="font-size:12px;fill:#ffffff;fill-rule:evenodd;stroke-width:1.25"
          id="path775"
        />
        <path
          d="M 234.042,309.73 L 236.742,348.136 L 230.741,348.736 L 241.543,362.839 L 247.544,346.336 L 241.843,346.936 L 238.543,309.129 L 234.042,309.73 z "
          transform="matrix(-0.632453,0.774599,-0.774599,-0.632453,856.5449,595.1266)"
          style="font-size:12px;fill:#ffffff;fill-rule:evenodd;stroke-width:1.25"
          id="path776"
        />
        <path
          d="M 234.042,309.73 L 236.742,348.136 L 230.741,348.736 L 241.543,362.839 L 247.544,346.336 L 241.843,346.936 L 238.543,309.129 L 234.042,309.73 z "
          transform="matrix(-0.99569,9.274251e-2,-9.274251e-2,-0.99569,577.7677,698.2108)"
          style="font-size:12px;fill:#ffffff;fill-rule:evenodd;stroke-width:1.25"
          id="path777"
        />
        <path
          d="M 234.042,309.73 L 236.742,348.136 L 230.741,348.736 L 241.543,362.839 L 247.544,346.336 L 241.843,346.936 L 238.543,309.129 L 234.042,309.73 z "
          transform="matrix(3.659604e-2,-0.999331,0.999331,3.659604e-2,143.0545,568.1887)"
          style="font-size:12px;fill:#ffffff;fill-rule:evenodd;stroke-width:1.25"
          id="path867"
        />
        <path
          d="M 234.042,309.73 L 236.742,348.136 L 230.741,348.736 L 241.543,362.839 L 247.544,346.336 L 241.843,346.936 L 238.543,309.129 L 234.042,309.73 z "
          transform="matrix(-0.207306,0.978276,-0.978276,-0.207306,556.7452,188.3574)"
          style="font-size:12px;fill:#ffffff;fill-rule:evenodd;stroke-width:1.25"
          id="path868"
        />
        <path
          d="M 234.042,309.73 L 236.742,348.136 L 230.741,348.736 L 241.543,362.839 L 247.544,346.336 L 241.843,346.936 L 238.543,309.129 L 234.042,309.73 z "
          transform="matrix(-0.919729,0.392554,-0.392554,-0.919729,678.2682,479.4969)"
          style="font-size:12px;fill:#ffffff;fill-rule:evenodd;stroke-width:1.25"
          id="path869"
        />
        <path
          d="M 234.042,309.73 L 236.742,348.136 L 230.741,348.736 L 241.543,362.839 L 247.544,346.336 L 241.843,346.936 L 238.543,309.129 L 234.042,309.73 z "
          transform="matrix(-0.831594,-0.555384,0.555384,-0.831594,432.2353,671.4384)"
          style="font-size:12px;fill:#ffffff;fill-rule:evenodd;stroke-width:1.25"
          id="path870"
        />
        <path
          d="M 234.042,309.73 L 236.742,348.136 L 230.741,348.736 L 241.543,362.839 L 247.544,346.336 L 241.843,346.936 L 238.543,309.129 L 234.042,309.73 z "
          transform="matrix(-0.996455,-8.413078e-2,8.413078e-2,-0.996455,588.137,608.9028)"
          style="font-size:12px;fill:#ffffff;fill-rule:evenodd;stroke-width:1.25"
          id="path871"
        />
      </svg>
      {variant === "icon" ? null : inWishlist ? "Remover" : "Favoritar"}
    </Button>
  );
}

export default ButtonCommon;
