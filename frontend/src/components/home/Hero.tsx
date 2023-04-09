import React from "react";
import HeroButton from "@/components/home/HeroButton";
import i18nStore from "@/store/i18n.store";

const Hero = () => {
    const dict = i18nStore.getState().dictionary

    return <div className='h-[530px] xs:h-[530px] sm:h-[580px] md:h-[850px]'>
        <div className='container m-auto py-8 sm:py-28'>
            <h1 className='text-5xl sm:text-6xl text-white font-bold tracking-wide'>{dict['hero.title.1']}<br/>{dict['hero.title.2']}</h1>
            <p className='text-white text-2xl mt-10'>{dict['hero.subtitle.1']}<br/>{dict['hero.subtitle.2']}</p>
            <HeroButton/>
        </div>

        <div className='hidden lg:block absolute top-[340px] xl:top-[260px] right-[4%] xl:right-[8%] w-[550px] h-[550px] xl:w-[634px] xl:h-[652px]'>
            <svg width="100%" height="100%" viewBox="0 0 634 652" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_120_65)">
                    <path d="M412.594 392.907C412.594 392.907 448.076 470.978 448.605 470.906C449.135 470.834 465.743 455.135 465.743 455.135L417.707 366.944L409.879 374.102L412.594 392.907Z" fill="#F89B7C"/>
                    <path d="M401.24 350.201C401.648 349.958 401.885 349.584 402.15 349.195C402.536 348.629 402.961 348.223 403.493 347.805C404.29 347.178 403.604 346.124 402.794 346.238C402.791 345.853 402.476 345.524 402.102 345.44C402.157 344.794 401.452 344.15 400.827 344.677C399.58 345.729 397.148 347.872 398.739 349.596C399.38 350.291 400.378 350.713 401.24 350.201Z" fill="#93AABC"/>
                    <path d="M421.854 403.507C421.854 403.507 415.572 354.489 415.683 351.15C415.794 347.81 418.873 342.406 420.712 339.94C422.551 337.475 423.261 334.608 420.724 331.627C418.187 328.646 410.465 323.044 409.016 324.349C407.567 325.653 413.979 333.65 413.659 335.355C413.339 337.061 409.451 340.358 407.193 339.556C404.935 338.754 401.421 328.149 399.902 328.909C398.383 329.668 395.932 339.975 398.609 344.044C401.286 348.114 407.579 353.079 407.789 354.713C407.998 356.347 412.413 403.401 414.281 405.365C416.148 407.328 421.304 405.521 421.854 403.507ZM415.092 401.4C414.72 398.489 419.111 397.899 419.484 400.805C419.857 403.715 415.465 404.306 415.092 401.4Z" fill="#B0C1D3"/>
                    <path d="M408.954 350.468L413.06 347.74C413.311 347.573 413.568 347.401 413.742 347.152C414.007 346.771 414.039 346.261 413.932 345.806C413.826 345.351 413.597 344.939 413.37 344.534L411.613 341.39C411.158 340.577 409.831 341.724 409.374 342.01C408.563 342.518 407.732 342.988 406.909 343.475C406.218 343.884 405.632 344.398 404.917 344.796C404.74 344.895 404.556 345.001 404.453 345.178C404.294 345.452 404.377 345.801 404.476 346.104C404.991 347.687 405.781 349.159 406.809 350.45C407.005 350.697 407.231 350.95 407.532 351.025C407.931 351.123 408.327 350.884 408.671 350.656L408.954 350.468ZM399.634 344.087C401.939 342.733 403.945 340.721 405.717 338.708C406.459 337.866 405.117 336.858 404.372 337.647C402.636 339.488 400.678 340.943 398.765 342.563C398.046 343.173 398.747 344.608 399.634 344.087Z" fill="#93AABC"/>
                    <path d="M424.385 394.901C422.32 392.331 420.517 389.55 419.007 386.6C417.973 384.582 417.432 382.19 417.376 379.916C417.346 378.692 417.715 377.586 417.658 376.364C417.596 375.062 417.285 373.783 416.916 372.541C416.381 370.734 415.711 368.955 415.446 367.086C415.182 365.217 415.366 363.195 416.416 361.644C416.747 361.156 417.2 360.7 417.772 360.608C418.839 360.437 419.126 361.395 419.337 362.191C419.626 363.281 420.069 364.348 420.516 365.378C421.453 367.537 422.597 369.592 423.739 371.642C425.269 374.386 425.764 376.153 427.293 378.897C428.342 380.778 428.743 387.531 430.189 389.108C431.285 390.302 471.398 455.778 471.398 455.778C463.051 459.575 450.278 433.955 441.361 435.96C440.668 430.434 424.811 400.455 424.385 394.901Z" fill="#F89B7C"/>
                    <path d="M405.62 368.24C405.714 368.898 406.04 369.499 406.421 370.036C406.883 370.687 407.468 371.477 407.135 372.206C406.784 372.978 405.737 372.971 404.986 373.328C403.948 373.82 403.453 375.13 403.594 376.296C403.735 377.462 404.388 378.497 405.13 379.391C405.68 380.055 406.329 380.773 406.292 381.645C406.234 382.996 404.545 383.911 404.69 385.256C404.792 386.21 405.82 386.937 405.7 387.889C405.644 388.332 405.343 388.698 405.183 389.114C404.859 389.958 405.159 390.951 405.731 391.642C406.303 392.333 407.105 392.774 407.908 393.15C410.765 394.487 413.86 395.204 416.999 395.257C417.313 395.262 417.65 395.253 417.909 395.07C418.819 394.426 417.826 392.587 418.734 391.938C419.059 391.706 419.495 391.754 419.878 391.65C420.895 391.375 421.33 390.015 420.977 388.996C420.624 387.978 419.728 387.267 418.816 386.729C417.904 386.19 416.916 385.75 416.155 385.004C416.004 384.855 415.856 384.681 415.833 384.468C415.769 383.886 416.546 383.678 416.977 383.296C417.546 382.791 417.498 381.828 417.102 381.172C416.706 380.515 416.056 380.075 415.465 379.599C414.534 378.85 413.709 377.971 413.014 376.987C412.603 376.404 412.31 375.438 412.923 375.089C413.226 374.917 413.602 375.014 413.943 374.954C414.853 374.793 415.206 373.606 415.089 372.664C414.895 371.097 413.947 369.712 412.771 368.694C411.684 367.752 410.197 366.73 408.866 366.187C407.317 365.555 405.332 366.228 405.62 368.24Z" fill="#F89B7C"/>
                    <path d="M426.809 394.074C425.625 392.763 424.196 391.747 423.057 390.378C421.85 388.925 420.849 387.304 420.082 385.564C419.58 384.433 417.866 385.166 418.344 386.32C419.77 389.761 422.314 393.903 425.806 395.418C426.548 395.74 427.409 394.738 426.809 394.074Z" fill="#E98465"/>
                    <path d="M498.712 616.895C498.916 621.048 455.947 621.841 412.951 622.102C342.335 622.531 307.299 623.079 307.06 617.937C306.875 613.963 374.686 614.813 412.676 614.813C450.666 614.812 498.431 611.148 498.712 616.895Z" fill="#887699"/>
                    <path d="M479.176 378.039C479.176 378.039 481.988 375.094 483.573 371.909C485.158 368.724 490.706 366.789 489.888 359.838C489.374 355.466 495.842 344.176 496.608 339.673C497.211 336.121 498.135 342.787 496.459 339.62C496.289 339.298 496.106 338.979 495.998 338.63C495.876 338.24 495.851 337.827 495.805 337.42C495.245 332.507 491.879 327.618 488.425 324.319C486.91 322.873 485.186 321.583 483.233 320.843C482.299 320.489 481.318 320.265 480.322 320.223C479.838 320.202 479.352 320.223 478.871 320.287C478.579 320.325 477.615 320.72 477.388 320.62C477.388 320.62 480.787 320.88 473.64 321.846C466.493 322.813 454.291 322.235 450.554 334.37C446.171 348.601 467.456 372.697 467.456 372.697L479.176 378.039Z" fill="#3B1713"/>
                    <path d="M447.515 393.458C449.551 394.354 477.663 395.611 478.759 395.955C478.538 393.64 479.462 383.151 479.396 381.674C479.42 380.465 479.381 377.967 479.381 377.967C477.738 377.18 475.877 375.603 474.543 374.342C473.219 373.088 471.954 371.723 471.179 370.057C470.402 368.385 470.18 366.364 470.952 364.697C473.484 364.94 476.081 364.273 478.226 362.872C480.781 361.206 482.467 356.4 479.819 354.041C478.693 353.038 477.121 352.704 475.665 352.788C474.788 352.84 473.923 353.033 473.103 353.36C472.432 353.615 471.048 354.111 470.64 354.756C470.636 354.759 467.945 359.011 467.945 359.011C467.945 359.011 464.786 359.593 464.658 358.226C464.559 357.145 465.459 355.591 465.819 354.606C466.387 353.035 466.96 351.462 467.533 349.888C467.651 349.563 467.772 349.223 467.713 348.877C467.671 348.635 467.543 348.413 467.419 348.196C465.757 345.301 464.897 341.994 464.931 338.632C464.937 338.177 464.945 337.693 464.694 337.322C464.553 337.122 464.348 336.978 464.141 336.842C462.918 336.035 461.59 335.357 460.545 334.315C459.204 332.978 452.698 331.134 453.45 330.359C453.81 329.988 454.036 329.761 454.164 329.635C453.839 329.94 452.993 330.69 452.568 330.734C451.531 330.841 450.132 332.603 448.37 336.019C447.156 338.375 446.535 339.669 445.619 342.156C445.209 343.266 442.33 344.949 439.818 347.16C438.115 348.658 436.599 349.137 436.784 350.818C436.853 351.437 438.416 352.685 439.636 353.33C439.76 353.534 439.318 354.983 438.32 357.583C438.118 358.103 438.854 358.813 438.656 359.372C438.045 359.744 437.19 361.364 437.35 361.69C438.264 363.555 437.038 365.733 436.852 367.065C436.262 371.304 439.986 372.577 441.513 373.211C446.096 375.111 450.171 374.263 452.555 374.711C452.989 374.789 452.482 375.898 452.587 376.073C452.952 376.674 448.469 391.999 447.515 393.458Z" fill="#F89B7C"/>
                    <path d="M452.404 339.271C452.529 339.359 452.643 339.466 452.754 339.573C453.439 340.233 454.083 340.937 454.726 341.64C455.476 342.46 456.239 343.3 456.699 344.322C456.786 344.515 456.862 344.722 456.85 344.934C456.796 345.814 455.612 345.518 455.258 345.058C454.285 343.791 453.273 342.495 452.133 341.357C451.7 340.925 451.09 340.586 451.121 339.889C451.143 339.377 451.599 338.945 452.103 339.114C452.211 339.15 452.31 339.205 452.404 339.271Z" fill="#3B1713"/>
                    <path d="M452.445 346.095C452.864 346.221 453.104 346.598 453.157 347.031C453.229 347.614 452.976 348.326 452.678 348.814C452.285 349.46 451.648 350.044 450.848 349.738C449.317 349.154 449.989 346.978 450.791 346.061C451.196 345.598 452.064 345.571 452.445 346.095Z" fill="#1A1A1A"/>
                    <path d="M441.274 350.29C441.721 350.574 442.066 350.937 442.368 351.378C442.771 351.964 441.855 352.544 441.45 351.966C441.234 351.658 440.959 351.404 440.675 351.164C440.219 350.779 440.767 349.968 441.274 350.29Z" fill="#E98465"/>
                    <path d="M438.32 357.583C438.118 358.103 438.478 358.839 438.655 359.372C440.693 359.804 440.18 360.069 442.262 360.325C443.318 360.457 443.18 359.496 442.116 359.363C440.112 359.118 440.278 358.026 438.32 357.583Z" fill="#D27259"/>
                    <path d="M489.993 361.129C489.993 361.129 487.64 358.192 473.812 347.575C459.992 336.961 435.009 322.067 435.216 318.762C435.423 315.457 452.969 325.089 452.969 325.089C452.969 325.089 465.475 305.24 476.422 309.241C484.159 312.07 499.656 330.652 499.239 341.09C499.129 343.812 497.995 347.046 496.55 350.109C495.289 352.791 493.796 355.341 492.555 357.312C491.104 359.618 489.993 361.129 489.993 361.129Z" fill="#F1404C"/>
                    <path d="M462.423 335.167C458.741 332.143 455.505 328.721 452.762 324.779C452.067 323.78 450.712 325.009 451.36 326.002C454.075 330.163 457.368 332.812 461.296 335.782C462.301 336.542 463.382 335.954 462.423 335.167Z" fill="#C31E21"/>
                    <path d="M490.699 350.113C490.315 350.459 489.954 350.831 489.619 351.228C489.178 351.926 488.782 352.685 488.421 353.441C489.533 354.524 491.406 356.254 492.555 357.312C493.795 355.341 495.288 352.791 496.549 350.108C496.358 349.885 496.107 349.607 495.821 349.313C493.938 348.356 492.455 348.557 490.699 350.113ZM439.626 353.472C439.626 353.472 434.884 366.767 435.118 370.857C435.681 380.709 452.586 378.391 458.221 376.073C462.03 374.506 470.618 354.052 470.618 354.052L466.807 353.091C466.807 353.091 462.729 359.267 461.039 359.847C459.348 360.426 451.459 361.585 449.205 359.847C446.952 358.108 443.57 355.21 439.626 353.472Z" fill="#3B1713"/>
                    <path d="M439.222 356.29C439.222 356.29 443.357 358.791 443.571 359.847C443.785 360.902 436.911 363.848 437 362.664C437.09 361.48 439.222 356.29 439.222 356.29Z" fill="white"/>
                    <path d="M495.977 493.133C495.977 496.031 492.596 502.405 492.596 502.405L424.412 492.553C424.412 492.553 420.467 482.122 420.467 479.224C420.467 476.327 424.975 468.214 424.975 461.839C424.975 461.086 424.998 459.991 425.049 458.623C425.195 454.114 425.494 445.057 426.103 437.5C426.88 427.92 424.711 419.767 426.103 415.478C428.92 406.786 444.135 399.252 444.135 399.252C444.135 399.252 440.754 391.718 441.881 390.56C443.008 389.401 479.072 383.026 481.89 384.765C484.708 386.503 480.2 392.878 481.327 394.616C482.454 396.355 497.105 409.104 497.105 427.068C497.105 448.51 491.35 472.936 492.034 475.747C493.16 480.384 495.977 490.236 495.977 493.133Z" fill="#5E78B4"/>
                    <path d="M450.896 447.932C450.896 447.932 445.824 454.306 425.048 458.623C425.194 454.115 425.594 446.686 426.203 439.129L450.896 447.932Z" fill="#1A1A1A"/>
                    <path d="M492.561 442.047C493.322 437.155 493.425 432.178 492.865 427.257C492.241 421.774 490.81 416.449 488.645 411.4C488.409 410.851 487.629 411.323 487.86 411.868C491.831 421.211 493.185 431.694 491.595 441.77C490.794 446.85 489.22 451.746 488.012 456.729C486.791 461.765 486.103 466.902 486.148 472.098C486.17 474.707 486.1 477.722 486.86 480.238C487.217 481.423 487.986 482.414 488.235 483.645C488.539 485.144 488.365 486.687 488.164 488.188C488.084 488.787 489.111 488.939 489.197 488.336C489.493 486.239 489.706 484.054 488.853 482.058C488.387 480.967 487.836 480.046 487.655 478.849C487.429 477.366 487.336 475.846 487.265 474.348C486.994 468.686 487.582 463.056 488.874 457.55C490.089 452.379 491.741 447.311 492.561 442.047Z" fill="#545A8F"/>
                    <path d="M338.659 327.638C338.659 327.638 327.664 325.257 325.927 331.208C324.191 337.16 330.557 344.896 335.187 344.301C339.816 343.706 343.867 330.614 343.867 330.614L338.659 327.638ZM359.779 328.985C359.779 328.985 370.774 331.366 372.51 325.415C374.247 319.464 367.881 311.727 363.251 312.322C358.621 312.917 354.57 326.01 354.57 326.01L359.779 328.985Z" fill="#B0C1D3"/>
                    <path d="M376.124 457.023C374.544 447.081 380.69 422.658 381.773 415.42C382.93 407.683 385.245 381.497 378.879 363.048C372.513 344.599 360.939 326.745 348.786 311.867C339.899 300.986 336.585 291.066 335.445 286.518C336.035 284.843 338.981 276.187 337.256 275.003C335.344 273.692 323.872 273.037 323.235 278.28C322.73 282.433 327.42 286.173 329.393 287.55C331.664 299.252 344.157 314.247 344.157 314.247C366.147 341.624 377.143 361.858 378.605 386.672C380.066 411.486 373.092 435.059 370.777 444.582C369.479 449.925 369.273 455.455 369.752 459.596C369.237 462.549 368.463 467.194 368.463 468.387C368.463 470.172 371.935 474.338 377.143 472.553C382.352 470.767 382.352 467.196 382.352 464.816C382.351 462.87 378.484 458.539 376.124 457.023Z" fill="#B0C1D3"/>
                    <path d="M334.359 283.829C331.984 282.514 329.248 284.01 328.432 286.504C328 287.827 329.987 288.356 330.447 287.075C330.953 285.664 332.287 285.457 333.54 285.826C334.684 286.164 335.433 284.423 334.359 283.829ZM375.44 461.295C374.13 463.239 371.711 462.278 371.421 460.134C371.26 458.937 369.23 459.206 369.352 460.422C369.781 464.695 375.073 466.213 377.361 462.45C378.13 461.186 376.246 460.1 375.44 461.295ZM337.709 334.902C336.584 331.98 334.209 329.813 331.149 329.382C329.876 329.202 329.307 331.193 330.608 331.399C334.967 332.09 337.895 337.966 335.904 342.109C335.451 343.053 336.578 344.052 337.36 343.264C339.329 341.279 338.614 337.251 337.709 334.902ZM331.79 336.356L331.169 335.483C330.852 335.039 330.263 334.774 329.765 335.104C329.328 335.394 329.068 336.064 329.396 336.548L330.033 337.486C330.319 337.908 330.58 338.4 331.108 338.513C331.769 338.654 332.239 338.222 332.315 337.567C332.371 337.084 332.048 336.719 331.79 336.356ZM363.768 328.9C362.422 327.045 361.044 325.215 359.679 323.374C358.905 322.33 357.156 323.349 357.938 324.421C359.289 326.27 360.627 328.131 361.996 329.966C362.786 331.024 364.564 329.996 363.768 328.9Z" fill="#93AABC"/>
                    <path d="M333.431 298.923L332.986 297.987C332.334 296.617 331.727 294.534 333.381 293.65C335.477 292.529 337.663 297.083 338.646 298.43C341.452 302.276 343.921 307.068 347.629 310.081C347.629 310.081 351.308 309.571 353.994 310.676C356.888 311.867 357.503 316.033 357.467 319.008C357.43 321.984 363.46 380.882 368.486 395.826C373.513 410.771 362.87 429.301 362.87 429.301C362.87 429.301 344.966 427.955 342.328 408.178C340.737 396.254 338.981 375.534 339.361 365.433C339.599 359.124 339.198 355.546 339.545 349.242C339.76 345.328 339.776 341.5 339.67 337.583C339.616 335.593 339.422 333.416 338.798 331.522C338.407 330.338 337.805 329.232 337.473 328.028C336.932 326.065 337.737 323.882 337.178 322.062C336.778 320.758 335.767 319.643 335.722 318.278C335.675 316.867 336.687 315.572 336.57 314.165C336.468 312.94 335.484 311.804 335.421 310.606C335.34 309.051 337.212 309.171 337.246 307.67C337.262 306.988 336.963 306.346 336.672 305.734L333.431 298.923Z" fill="#F89B7C"/>
                    <path d="M471.746 396.356C471.746 396.356 435.118 396.935 424.975 397.514C421.192 397.73 417.393 397.736 413.605 397.75C406.82 397.775 403.416 398.284 396.632 398.151C393.668 398.093 390.704 398.023 387.741 397.924C386.594 397.886 385.447 397.825 384.3 397.79C382.828 397.746 381.121 398.405 379.763 397.62C379.29 397.346 378.923 396.919 378.547 396.515C376.186 393.978 372.204 390.739 368.521 391.514C367.498 391.73 366.556 392.236 365.651 392.772C360.476 395.836 355.601 400.219 352.209 405.252C349.676 409.01 345.422 415.038 346.706 419.96C349.465 430.546 360.172 432.285 362.996 431.704C369.897 430.288 374.121 433.2 380.288 436.005C393.063 441.814 407.495 443.465 421.111 446.1C431.756 448.16 446.212 451.848 456.531 446.773C469.492 440.398 480.762 411.423 471.746 396.356Z" fill="#5E78B4"/>
                    <path d="M354.592 316.253C352.468 313.414 349.789 310.949 347.134 308.645C346.137 307.78 344.694 309.213 345.682 310.138C348.215 312.507 350.486 315.123 352.952 317.555C353.768 318.361 355.341 317.255 354.592 316.253Z" fill="#E98465"/>
                    <path d="M378.9 398.402C376.755 399.461 375.379 401.271 373.95 403.17C372.188 405.511 370.458 407.88 368.954 410.406C366.143 415.129 363.614 421.027 364.304 426.691C364.458 427.96 366.173 428.016 366.267 426.691C366.669 421.072 367.975 416.395 370.856 411.549C373.057 407.848 376.076 402.227 379.918 400.193C381.079 399.577 380.059 397.83 378.9 398.402ZM469.383 395.184C459.049 394.835 448.708 395.236 438.414 396.201C437.175 396.318 437.154 398.316 438.414 398.211C448.724 397.359 459.044 397.134 469.383 397.357C470.745 397.386 470.741 395.229 469.383 395.184ZM457.408 399.344C456.897 398.932 456.169 399.668 456.686 400.087C462.461 404.765 465.359 412.296 465.182 419.764C464.987 428.049 461.13 435.673 456.024 441.892C455.617 442.387 456.296 443.106 456.724 442.612C462.154 436.345 466.049 428.271 466.252 419.764C466.436 412.048 463.387 404.164 457.408 399.344Z" fill="#464A7D"/>
                    <path d="M430.047 430.836C433.003 430.836 435.4 426.166 435.4 420.405C435.4 414.644 433.003 409.974 430.047 409.974C427.09 409.974 424.693 414.644 424.693 420.405C424.693 426.166 427.09 430.836 430.047 430.836Z" fill="white"/>
                    <path d="M356.628 619.342C356.628 619.342 322.197 621.402 319.473 617.278C316.75 613.154 329.304 606.504 340.06 604.447C350.817 602.39 356.628 619.342 356.628 619.342Z" fill="#5C3B3B"/>
                    <path d="M353.942 590.611C344.001 573.485 335.316 555.119 328.954 536.281C327.148 530.933 325.551 525.496 324.388 519.959C323.347 515.002 321.472 508.141 323.197 503.276C325.861 495.761 330.794 489.06 337.07 484.331C341.11 481.287 347.465 481.243 352.4 481.042C364.854 480.533 376.248 483.999 388.454 486.38C401.494 488.924 415.999 492.475 428.306 494.759L442.506 487.449L439.928 531.664L353.942 590.611Z" fill="#5E78B4"/>
                    <path d="M485.27 541.812C480.407 552.533 468.929 557.458 457.664 561.022C458.543 563.769 459.417 568.324 460.166 573.557C462.015 586.532 463.057 603.656 461.321 607.586C461.197 607.864 460.876 608.148 460.374 608.432C449.391 614.65 351.679 621.975 344.675 619.755C337.349 617.437 316.116 601.182 330.024 578.03C341.857 558.327 441.035 492.264 441.035 492.264L491.187 492.843C491.187 492.843 496.473 517.125 485.27 541.812Z" fill="#5E78B4"/>
                    <path d="M461.321 607.586C461.197 607.864 460.876 608.148 460.375 608.432C456.633 607.313 452.288 582.841 452.288 582.841L460.166 573.557C462.015 586.532 463.057 603.657 461.321 607.586Z" fill="#1A1A1A"/>
                    <path d="M464.306 559.668L452.587 562.095C452.587 562.095 448.643 568.469 453.15 587.593C453.15 587.593 462.73 585.854 465.548 586.434C468.365 587.013 475.691 576.002 475.691 576.002L472.31 563.253L464.306 559.668Z" fill="white"/>
                    <path d="M493.385 617.17C490.155 619.358 472.927 619.358 472.388 617.717C471.311 614.435 477.772 608.966 477.772 608.966C477.234 604.044 471.85 599.203 467.542 597.016C464.987 595.718 462.154 595.306 459.441 594.496C456.332 593.568 456.008 592.456 455.8 589.26C455.737 588.293 455.681 587.286 456.051 586.393C456.304 585.783 456.739 585.271 457.189 584.792C459.768 582.042 463.636 580.356 464.312 576.234C465.389 569.671 455.457 566.372 456.534 560.903C456.534 560.903 463.316 558.607 468.62 557.639C470.645 557.269 472.404 557.524 473.923 558.032C481.756 560.647 483.226 572.536 486.386 581.702C489.708 591.345 496.615 614.982 493.385 617.17Z" fill="#5C3B3B"/>
                    <path d="M493.385 617.17C490.155 619.358 472.927 619.358 472.388 617.717C478.31 618.81 483.743 617.114 485.359 616.021C486.974 614.927 482.394 605.252 480.272 598.796C478.427 593.186 473.465 577.327 471.85 566.936C470.67 559.35 472.717 558.136 473.912 558.033H473.923C481.756 560.647 483.894 571.832 487.055 580.998C490.376 590.64 496.615 614.982 493.385 617.17Z" fill="#1A1A1A"/>
                    <path d="M449.981 563.369C433.204 567.776 416.121 571.026 398.914 573.166C398.809 573.284 398.671 573.382 398.486 573.443C385.201 577.856 371.54 581.022 357.663 582.641C356.381 582.791 356.295 580.758 357.562 580.588C367.976 579.193 378.264 577.14 388.382 574.335C382.092 574.952 375.789 575.424 369.478 575.749C368.138 575.818 368.029 573.684 369.373 573.605C396.374 572.02 423.059 567.884 449.367 561.46C450.578 561.165 451.208 563.046 449.981 563.369ZM464.303 530.099C459.1 525.394 454.076 520.284 453.027 512.911C452.838 511.581 450.888 512.152 451.066 513.467C452.105 521.132 457.296 526.818 462.827 531.617C463.843 532.498 465.319 531.018 464.303 530.099Z" fill="#464A7D"/>
                    <path d="M422.41 493.622C422.41 493.622 474.137 502.633 492.946 511.212C492.946 511.212 495.876 507.63 493.109 501.83C493.109 501.83 443.571 486.759 422.721 487.338C422.721 487.338 419.845 490.054 422.41 493.622Z" fill="#4B3333"/>
                    <path d="M484.853 495.966C484.727 493.256 480.653 493.227 480.732 495.966C480.844 499.784 480.727 503.304 479.543 506.959C478.819 509.195 482.241 510.718 483.277 508.578C485.179 504.649 485.053 500.248 484.853 495.966ZM442.621 487.376C441.508 490.957 440.622 494.864 440.669 498.647C440.703 501.471 444.553 501.333 444.842 498.647C445.216 495.175 445.578 491.855 446.544 488.488C447.287 485.893 443.415 484.821 442.621 487.376Z" fill="#5E78B4"/>
                    <path d="M424.438 500.941C410.318 509.721 396.52 519.131 383.103 529.084C373.591 524.859 364.238 520.28 355.033 515.387C353.841 514.753 352.761 516.583 353.956 517.236C360.312 520.704 366.789 523.92 373.367 526.905C363.511 525.929 354.441 521.269 345.63 516.75C344.463 516.152 343.38 517.98 344.58 518.553C355.664 523.847 366.371 528.483 377.478 529.256C377.746 529.275 377.961 529.159 378.125 529.02C379.196 529.485 380.27 529.945 381.347 530.397C368.991 539.631 356.963 549.319 345.286 559.444C343.866 560.675 345.875 562.731 347.291 561.55C372.396 540.614 398.637 521.442 426.016 503.785C427.743 502.671 426.201 499.845 424.438 500.941Z" fill="#464A7D"/>
                    <path d="M175.341 588.752H154.491L154.511 598.66L179.286 598.024L175.341 588.752Z" fill="#1A1A1A"/>
                    <path d="M171.96 498.928C171.96 498.928 178.158 489.656 180.413 489.076C182.667 488.496 203.516 488.497 204.644 489.656C205.77 490.815 206.334 491.974 206.334 491.974C206.334 491.974 202.39 498.348 201.263 500.087C200.135 501.826 171.96 498.928 171.96 498.928Z" fill="#F1404C"/>
                    <path d="M255.359 562.674C254.829 568.11 244.089 571.367 244.089 571.367C244.089 571.367 232.717 571.564 217.925 571.703C204.981 571.813 189.423 571.877 176.564 571.715C162.932 571.541 152.339 571.106 151.11 570.208C147.408 567.49 134.239 515.485 134.768 511.678C135.298 507.87 142.235 493.713 144.348 493.713C146.461 493.713 225.735 496.645 229.438 497.189C233.14 497.734 255.889 557.238 255.359 562.674Z" fill="#F1404C"/>
                    <path d="M228.31 500.667C227.184 499.508 148.856 496.031 147.729 497.19C146.762 498.184 159.896 542.256 163.648 554.758C163.702 554.939 163.791 555.106 163.909 555.251C164.027 555.396 164.172 555.515 164.336 555.601C164.5 555.687 164.678 555.739 164.861 555.753C165.045 555.767 165.229 555.743 165.403 555.683L165.429 555.674C165.759 555.561 166.035 555.324 166.202 555.01C166.369 554.696 166.413 554.328 166.328 553.982C163.631 543.047 154.033 513.671 154.491 512.257C155.054 510.519 217.604 513.416 219.858 513.416C222.112 513.416 239.017 566.152 239.017 566.152C239.017 566.152 252.541 570.208 252.541 563.254C252.541 556.3 229.438 501.826 228.31 500.667ZM176.564 571.714C162.932 571.54 152.339 571.106 151.11 570.207C153.928 570.207 165.198 559.197 165.198 559.197L171.96 561.515L176.564 571.714Z" fill="#C02328"/>
                    <path d="M175.904 498.928C175.904 498.928 180.976 491.394 182.103 490.815C183.23 490.236 205.77 491.394 206.334 491.974C206.897 492.553 201.262 500.666 201.262 500.666L175.742 499.272L175.904 498.928Z" fill="#C02328"/>
                    <path d="M158.257 619.262C158.257 622.077 187.005 622.077 226.687 622.077C266.37 622.077 302.644 622.781 301.96 619.262C301.155 615.122 269.791 615.743 230.108 615.743C190.426 615.743 158.257 615.743 158.257 619.262Z" fill="#847895"/>
                    <path d="M194.055 532.212C191.014 530.931 186.728 532.776 183.339 536.826C179.95 540.875 201.17 568.613 201.17 568.613L211.243 563.513C211.243 563.514 197.095 533.494 194.055 532.212ZM194.683 545.301C191.789 546.848 188.955 543.532 188.825 540.514C188.811 540.41 188.81 540.305 188.822 540.201C188.838 539.416 189.044 538.663 189.494 538.037C190.066 537.241 190.919 537.227 191.567 537.605C192.101 537.51 192.685 537.7 193.091 538.085C194.066 538.282 194.953 538.801 195.615 539.564C197.113 541.302 196.751 544.195 194.683 545.301Z" fill="#EFB44B"/>
                    <path d="M202.423 567.324C195.111 558.723 189.388 548.968 185.476 538.272C185.023 537.032 183.212 537.874 183.651 539.111C187.517 549.995 193.289 560.032 200.767 568.703C201.673 569.754 203.33 568.391 202.423 567.324Z" fill="#D89B39"/>
                    <path d="M237.327 564.992C237.327 564.992 258.177 534.857 263.248 535.437C268.32 536.017 280.717 545.868 280.717 548.187C280.717 550.505 279.026 554.561 276.209 555.14C273.391 555.72 266.065 547.027 263.812 547.607C261.558 548.186 245.565 570.039 245.565 570.039L237.327 564.992Z" fill="#F1E6DC"/>
                    <path d="M227.184 566.73C227.184 566.151 251.978 501.826 253.105 501.826C254.232 501.826 259.303 504.144 259.303 504.144L234.509 567.89L227.184 566.73ZM204.643 560.356C204.643 560.356 180.413 552.243 177.032 553.982C173.651 555.72 171.891 562.936 171.891 562.936L204.643 560.356Z" fill="#ACBDCF"/>
                    <path d="M213.096 561.515C213.096 560.935 212.533 541.812 216.477 541.812C220.421 541.812 222.676 542.391 222.676 544.13C222.676 545.868 219.858 553.402 219.858 553.402C219.858 553.402 224.93 551.663 226.62 552.822C228.311 553.981 226.62 562.094 226.62 562.094L213.096 561.515Z" fill="#E5EAEC"/>
                    <path d="M291.695 558.038C291.695 558.038 287.59 617.855 285.536 618.558C283.483 619.262 173.996 621.373 171.259 618.558C170.711 617.994 170.551 616.872 170.373 616.14C169.966 614.465 169.679 612.758 169.404 611.056C168.581 605.954 167.97 600.814 167.386 595.679C166.716 589.793 166.113 583.899 165.542 578.003C165.077 573.206 164.634 568.406 164.211 563.604C164.077 562.083 163.554 559.978 165.026 558.978C166.658 557.869 168.74 558.038 170.603 558.038H291.695Z" fill="#4D4D4D"/>
                    <path d="M217.828 563.254C218.371 580.539 218.97 598.114 218.955 615.409C218.954 617.107 217.271 616.032 217.181 614.402C216.221 597.135 216.178 579.768 215.773 562.48C215.733 560.827 217.777 561.618 217.828 563.254ZM185.484 562.674C180.233 565.76 175.13 569.161 170 572.452C163.131 576.859 155.752 581.067 149.499 586.393C146.922 588.588 147.286 592.359 148.701 595.258C149.116 596.109 149.622 596.93 150.317 597.56C152.737 599.755 157.311 598.704 160.242 598.513C162.271 598.381 164.301 598.225 166.325 598.024L165.198 588.752L159.563 589.331C159.563 589.331 193.937 569.049 194.501 567.31C195.064 565.571 193.373 558.038 185.484 562.674Z" fill="#1A1A1A"/>
                    <path d="M295.53 260.286C295.428 259.593 295.05 259.12 294.52 258.849C294.805 252.279 294.805 237.57 294.805 237.57L288.606 236.991C288.606 237.418 287.687 250.459 287.883 257.504C286.243 257.603 285.298 260.099 287.005 261.316C289.096 262.806 291.759 262.941 294.174 262.422C295.085 262.226 295.661 261.184 295.53 260.286ZM323.824 258.811C324.107 252.223 324.107 237.571 324.107 237.571L317.909 236.991C317.909 237.438 316.902 251.696 317.22 258.444C315.055 258.233 314.315 261.73 316.598 262.536C318.905 263.352 321.67 263.721 324.036 262.953C326.032 262.305 325.913 258.951 323.824 258.811Z" fill="#93AABC"/>
                    <path d="M259.346 170.146C259.346 170.146 248.231 168.876 247.407 170.993C246.584 173.11 245.761 180.307 247.819 181.154C249.878 182 260.169 182 260.169 182V178.19L259.346 173.956V170.146ZM259.346 69.3118C259.346 69.3118 248.231 68.0419 247.407 70.1584C246.584 72.2754 245.761 79.4721 247.819 80.3192C249.878 81.1658 260.169 81.1658 260.169 81.1658V77.3556L259.346 73.1221V69.3118Z" fill="#E8EAEA"/>
                    <path d="M256.096 46.8259C256.096 46.8259 254.584 214.901 257.221 221.929C259.859 228.957 283.992 233.093 321.17 234.106C358.348 235.119 385.551 229.484 387.391 223.737C389.23 217.99 391.171 55.1444 390.742 49.9151C390.313 44.6859 380.577 28.7685 328.692 29.6732C276.808 30.5785 256.186 43.3499 256.096 46.8259Z" fill="#F2F4F4"/>
                    <path d="M281.842 228.977C281.842 228.977 296.348 223.865 320.571 224.525C344.793 225.185 364.205 226.584 365.85 228.368C367.495 230.151 357.945 250.761 355.646 252.438C353.349 254.114 310.553 253.269 306.03 252.825C289.725 251.221 281.842 228.977 281.842 228.977Z" fill="#F2F4F4"/>
                    <path d="M361.978 94.9533C362.241 84.7443 355.393 76.2757 346.682 76.0382C337.971 75.8006 330.695 83.884 330.432 94.093C330.169 104.302 337.017 112.771 345.728 113.008C354.439 113.246 361.715 105.162 361.978 94.9533Z" fill="#D4DDDD"/>
                    <path d="M359.059 94.8741C359.274 86.5557 353.693 79.6554 346.595 79.4619C339.498 79.2683 333.57 85.8548 333.355 94.1731C333.141 102.491 338.721 109.392 345.819 109.585C352.917 109.779 358.845 103.192 359.059 94.8741Z" fill="white"/>
                    <path d="M352.534 86.7401C350.023 90.7781 347.747 94.9479 345.231 98.9855C344.523 100.121 346.336 101.199 347.062 100.073C349.636 96.0842 352.268 92.0781 354.438 87.8708C355.062 86.6613 353.282 85.5386 352.534 86.7401ZM364.66 230.631C337.348 233.324 309.951 233.381 282.666 230.281C281.402 230.138 281.362 232.159 282.613 232.309C309.897 235.577 337.573 235.878 364.884 232.754C366.044 232.622 365.837 230.515 364.66 230.631ZM311.016 253.568C308.602 248.414 307.311 242.876 307.315 237.15C307.315 236.481 306.307 236.45 306.302 237.122C306.266 243.01 307.528 248.817 310.113 254.078C310.413 254.689 311.303 254.18 311.016 253.568Z" fill="#E8EAEA"/>
                    <path d="M330.541 238.612C326.427 236.371 319.112 236.756 315.837 240.452C315.68 240.514 315.548 240.629 315.462 240.778C313.285 244.327 314.297 248.754 317.445 251.32C321.162 254.35 326.073 253.914 330.238 252.23C330.585 252.09 330.713 251.766 330.688 251.437C330.776 251.405 330.863 251.357 330.945 251.289C335.064 247.825 335.607 241.372 330.541 238.612ZM329.738 250.278C329.689 250.361 329.653 250.453 329.633 250.548C329.623 250.552 329.613 250.552 329.603 250.556C328.05 251.139 326.399 251.577 324.753 251.678C322.845 250.995 321.277 249.497 320.66 247.44C319.977 245.164 320.427 241.751 322.841 240.754C323.279 240.573 322.985 239.779 322.536 239.952C319.733 241.035 318.99 244.778 319.705 247.481C320.159 249.194 321.187 250.617 322.537 251.588C321.54 251.436 320.562 251.126 319.627 250.603C316.584 248.9 315.028 245.253 316.599 241.992C316.692 241.949 316.784 241.885 316.87 241.791C319.457 238.97 324.545 238.726 327.996 239.676C329.925 240.208 331.895 241.478 332.355 243.633C332.915 246.259 330.935 248.261 329.738 250.278ZM357.047 238.175C352.933 235.934 345.617 236.32 342.343 240.015C342.202 240.068 342.071 240.172 341.967 240.341C339.791 243.89 340.802 248.317 343.95 250.883C347.667 253.913 352.578 253.477 356.744 251.793C357.09 251.653 357.218 251.329 357.193 251C357.281 250.968 357.368 250.92 357.45 250.852C361.569 247.388 362.112 240.935 357.047 238.175ZM356.244 249.841C356.194 249.924 356.158 250.016 356.138 250.111C356.128 250.115 356.118 250.115 356.108 250.119C354.555 250.702 352.904 251.14 351.258 251.241C349.35 250.558 347.782 249.06 347.165 247.003C346.482 244.728 346.932 241.314 349.346 240.317C349.784 240.135 349.49 239.342 349.041 239.515C346.238 240.598 345.495 244.341 346.21 247.044C346.664 248.757 347.693 250.18 349.042 251.151C348.045 250.999 347.067 250.689 346.132 250.166C343.089 248.463 341.533 244.816 343.105 241.554C343.197 241.512 343.289 241.448 343.375 241.353C345.962 238.533 351.05 238.288 354.501 239.239C356.43 239.77 358.4 241.041 358.86 243.196C359.42 245.822 357.441 247.824 356.244 249.841Z" fill="#D4DDDD"/>
                    <path d="M275.744 86.0786L274.837 58.9223C274.748 56.2521 268.603 55.8682 268.665 58.5632L269.3 86.2802C269.503 95.1762 268.587 104.483 270.965 113.331C271.483 115.256 275.299 114.837 275.654 113.177C277.53 104.404 276.041 94.9925 275.744 86.0786ZM277.442 125.257C277.52 122.671 271.691 122.327 271.484 124.91C270.949 131.606 269.973 138.448 270.637 145.187C270.871 147.552 275.566 147.83 276.058 145.502C277.458 138.883 277.239 131.972 277.442 125.257Z" fill="white"/>
                </g>
                <defs>
                    <clipPath id="clip0_120_65">
                        <rect width="634" height="652" fill="white"/>
                    </clipPath>
                </defs>
            </svg>

        </div>



        <div className='absolute top-0 w-full h-[750px] xs:h-[650px] sm:h-[640px] md:h-[1000px] -z-10 overflow-x-hidden'>
            <svg preserveAspectRatio='none' style={{minWidth: '800px'}} width="100%" height="100%" viewBox="0 0 1500 1027" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M658.796 -841.799C1106.11 -833.899 1324.96 -563.607 1599.93 -370.522C1868.25 -182.094 2239.87 -6.54787 2185.68 230.422C2126.84 487.724 1765.99 699.77 1331.43 803.596C914.686 903.168 427.107 873.163 39.3129 743.244C-307.185 627.161 -435.842 404.243 -512.07 185.989C-583.876 -19.6062 -564.178 -227.506 -361.784 -405.167C-121.503 -616.086 204.58 -849.821 658.796 -841.799Z" fill="url(#paint0_linear_60_66)"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M1527.28 407.542C1639.89 415.968 1649.67 542.121 1704.29 618.202C1736.24 662.707 1777.46 703.298 1776.07 754.104C1774.7 803.906 1742.44 848.856 1697 884.407C1651.06 920.343 1591.01 936.846 1527.28 948.722C1433.11 966.27 1332.9 1004.84 1248.76 967.933C1151.34 925.198 1069.35 839.55 1083.61 754.104C1097.43 671.281 1235.8 648.402 1312.03 588.851C1389.65 528.223 1417.08 399.296 1527.28 407.542Z" fill="#48A2FE" fillOpacity="0.48"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M-156.647 -102.313C-66.7029 -99.8225 10.2397 -86.8083 79.5938 -69.6646C158.427 -50.1777 244.039 -29.8071 258.479 0.302275C274.568 33.8514 255.043 75.5743 157.812 93.4349C63.7022 110.722 -46.4974 79.9449 -156.647 76.5578C-244.646 73.8519 -339.248 90.8457 -411.951 75.915C-491.807 59.5157 -522.64 29.0389 -527.967 0.302275C-533.624 -30.2109 -517.056 -63.2479 -441.616 -84.0961C-367.754 -104.508 -257.231 -105.098 -156.647 -102.313Z" fill="#3B51FF"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M978.347 594.53C1047.39 598.108 1108.28 631.815 1150.66 675.971C1188.17 715.06 1184.79 765.822 1190.03 815.092C1196.09 872.174 1236.89 943.057 1183 980.327C1128.79 1017.82 1049.55 965.457 978.347 961.489C916.726 958.055 852.19 985.819 800.122 958.99C739.564 927.787 697.623 873.028 694.226 815.092C690.704 755.043 728.733 698.556 782.405 656.89C835.015 616.05 905.515 590.757 978.347 594.53Z" fill="#3F8FFF" fillOpacity="0.48"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M1599.89 344.049C1723.04 348.698 1831.63 392.493 1907.21 449.864C1974.12 500.652 1968.1 566.606 1977.43 630.622C1988.25 704.787 2061.02 796.885 1964.9 845.31C1868.22 894.021 1726.89 825.99 1599.89 820.834C1489.98 816.372 1374.88 852.445 1282.01 817.586C1174 777.045 1099.2 705.898 1093.14 630.622C1086.86 552.601 1154.69 479.208 1250.41 425.072C1344.25 372.009 1469.99 339.146 1599.89 344.049Z" fill="#3F8FFF" fillOpacity="0.26"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M1411.22 711.664C1527.25 711.108 1630.97 731.25 1704.11 759.243C1768.85 784.025 1765.5 818.449 1776.54 851.495C1789.33 889.78 1861.03 935.89 1772.29 963.378C1683.03 991.027 1547.66 959.08 1427.98 959.465C1324.4 959.798 1217.37 981.325 1128.76 965.448C1025.71 946.984 952.818 911.812 944.47 872.834C935.818 832.436 997.058 792.654 1085.23 762.208C1171.66 732.365 1288.81 712.25 1411.22 711.664Z" fill="#48A2FE" fillOpacity="0.89"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M-402.874 400.82V1027H1737.26V668.643C1618.6 723.798 1483.93 769.524 1341.32 803.596C924.577 903.168 436.998 873.163 49.2036 743.244C-182.264 665.699 -316.519 540.478 -402.874 400.82Z" fill="white"/>
                <defs>
                    <linearGradient id="paint0_linear_60_66" x1="11.9236" y1="254.341" x2="399.992" y2="998.628" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#285BFE"/>
                        <stop offset="1" stopColor="#2588FF"/>
                    </linearGradient>
                </defs>
            </svg>
        </div>
    </div>
}

export default Hero