interface Props{
  color: string
}
const Logo = ({color}: Props) => {
  return (
    <svg width="255" height="74" viewBox="0 0 255 74" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M68.472 53.496C67.1493 53.496 65.8907 53.112 64.696 52.344C63.5013 51.6187 62.6053 50.488 62.008 48.952C61.7947 48.3973 61.6453 47.8 61.56 47.16C61.4747 46.52 61.432 45.9227 61.432 45.368V44.792C61.432 44.4507 61.4533 44.1093 61.496 43.768C61.5813 43.4267 61.7733 43.256 62.072 43.256C62.1573 43.256 62.2 43.2987 62.2 43.384C62.2 43.64 62.1787 43.9173 62.136 44.216C62.136 44.472 62.136 44.728 62.136 44.984C62.136 46.9893 62.6267 48.504 63.608 49.528C64.632 50.552 65.8907 51.064 67.384 51.064C68.8773 51.064 70.328 50.6373 71.736 49.784C73.144 48.9307 74.4453 47.8427 75.64 46.52C76.8347 45.1973 77.9653 43.5547 79.032 41.592C80.0987 39.6293 81.1013 37.56 82.04 35.384C82.9787 33.1653 83.8533 30.9893 84.664 28.856C85.5173 26.7227 86.3067 24.824 87.032 23.16C87.4587 22.1787 88.248 21.3467 89.4 20.664C90.5947 19.9813 91.7253 19.4907 92.792 19.192C92.4933 19.1493 92.1947 19.128 91.896 19.128C91.64 19.0853 91.384 19.0427 91.128 19L82.104 18.104C81.4213 18.0187 80.5253 17.9547 79.416 17.912C78.3067 17.8693 77.1333 17.848 75.896 17.848C74.232 17.848 72.5253 17.9547 70.776 18.168C69.0267 18.3387 67.448 18.6587 66.04 19.128C64.632 19.5973 63.608 20.3013 62.968 21.24C62.6267 21.752 62.456 22.3493 62.456 23.032C62.456 23.7147 62.648 24.3547 63.032 24.952C63.416 25.5493 63.9067 26.0187 64.504 26.36C64.5893 26.4453 64.632 26.5093 64.632 26.552C64.632 26.68 64.5253 26.7867 64.312 26.872C64.1413 26.9573 63.9493 26.9573 63.736 26.872C63.352 26.6587 62.904 26.296 62.392 25.784C61.88 25.272 61.4107 24.7387 60.984 24.184C60.6 23.5867 60.3227 23.096 60.152 22.712C59.896 21.9867 59.768 21.3467 59.768 20.792C59.768 19.768 60.1093 18.936 60.792 18.296C61.5173 17.6133 62.4347 17.1013 63.544 16.76C64.696 16.376 65.912 16.12 67.192 15.992C68.5147 15.8213 69.7733 15.736 70.968 15.736C71.4373 15.736 71.8853 15.736 72.312 15.736C72.7387 15.736 73.144 15.7573 73.528 15.8C74.8933 15.8853 76.3227 15.9707 77.816 16.056C79.3093 16.1413 80.824 16.248 82.36 16.376L92.536 17.208C93.2187 17.2507 94.2427 17.336 95.608 17.464C97.016 17.5493 98.4453 17.592 99.896 17.592C101.475 17.592 102.925 17.5067 104.248 17.336C105.571 17.1227 106.445 16.76 106.872 16.248C106.957 16.0773 107.085 16.0347 107.256 16.12C107.427 16.2053 107.469 16.312 107.384 16.44C107.256 16.952 107.085 17.336 106.872 17.592C106.659 18.0187 106.36 18.488 105.976 19C105.635 19.512 105.101 19.8533 104.376 20.024C104.205 20.0667 103.971 20.1093 103.672 20.152C103.373 20.152 103.053 20.152 102.712 20.152C101.731 20.152 100.536 20.088 99.128 19.96C97.7627 19.7893 96.4187 19.6187 95.096 19.448C93.816 19.6613 92.7067 20.2587 91.768 21.24C90.8293 22.2213 90.0187 23.352 89.336 24.632C88.6533 25.8693 88.056 27.0427 87.544 28.152C86.6053 30.072 85.816 31.8427 85.176 33.464C84.5787 35.0427 83.832 36.792 82.936 38.712C82.04 40.6747 81.1013 42.616 80.12 44.536C79.1387 46.4133 77.944 48.12 76.536 49.656C75.4693 50.808 74.232 51.7253 72.824 52.408C71.416 53.1333 69.9653 53.496 68.472 53.496ZM97.505 51.192C97.0783 51.192 96.7157 51.1067 96.417 50.936C96.1183 50.7653 95.969 50.4453 95.969 49.976C95.969 49.3787 96.1183 48.696 96.417 47.928C96.7157 47.16 97.057 46.4133 97.441 45.688C97.825 44.92 98.1663 44.3013 98.465 43.832C96.9717 45.4107 95.4143 46.904 93.793 48.312C92.9823 48.9947 92.0863 49.6347 91.105 50.232C90.1237 50.8293 89.0783 51.128 87.969 51.128C87.5423 51.128 87.2437 51 87.073 50.744C86.9023 50.4453 86.817 50.104 86.817 49.72C86.817 49.5067 86.8383 49.3573 86.881 49.272C87.0943 47.608 87.6277 45.88 88.481 44.088C89.3343 42.296 90.3797 40.6107 91.617 39.032C92.8543 37.4533 94.113 36.1733 95.393 35.192C96.8437 34.0827 98.4437 33.528 100.193 33.528H107.553C107.766 33.528 107.873 33.6133 107.873 33.784C107.873 34.1253 107.681 34.296 107.297 34.296C106.87 34.296 106.444 34.5733 106.017 35.128C105.59 35.64 105.27 36.0667 105.057 36.408C104.758 36.8773 104.289 37.6667 103.649 38.776C103.009 39.8853 102.348 41.1013 101.665 42.424C101.025 43.704 100.47 44.8987 100.001 46.008C99.5317 47.1173 99.297 47.928 99.297 48.44C99.297 49.0373 99.5957 49.336 100.193 49.336C100.833 49.336 101.558 49.0373 102.369 48.44C103.18 47.8427 103.99 47.1173 104.801 46.264C105.654 45.368 106.422 44.4933 107.105 43.64C107.83 42.744 108.406 42.04 108.833 41.528C109.089 41.784 109.068 42.1467 108.769 42.616C108.513 43.0427 108.278 43.384 108.065 43.64C107.212 44.7493 106.23 45.9013 105.121 47.096C104.012 48.248 102.796 49.2293 101.473 50.04C100.193 50.808 98.8703 51.192 97.505 51.192ZM90.593 48.952C91.105 48.952 91.809 48.5893 92.705 47.864C93.6437 47.096 94.6463 46.1573 95.713 45.048C96.7797 43.896 97.7823 42.7013 98.721 41.464C99.6597 40.184 100.428 39.032 101.025 38.008C101.665 36.9413 101.985 36.1307 101.985 35.576C101.985 35.1067 101.836 34.7867 101.537 34.616C101.281 34.4453 100.94 34.36 100.513 34.36C99.8303 34.36 99.0837 34.616 98.273 35.128C97.505 35.5973 96.8863 36.0667 96.417 36.536C95.905 37.0053 95.2863 37.752 94.561 38.776C93.8783 39.7573 93.1957 40.8453 92.513 42.04C91.8303 43.2347 91.2543 44.3867 90.785 45.496C90.3157 46.6053 90.081 47.5013 90.081 48.184C90.081 48.696 90.2517 48.952 90.593 48.952ZM111.454 52.024C110.686 52.024 109.875 51.9173 109.022 51.704C108.168 51.4907 107.4 51.1493 106.718 50.68C106.078 50.168 105.651 49.4853 105.438 48.632C105.395 48.504 105.373 48.312 105.373 48.056C105.373 47.4587 105.502 46.7973 105.758 46.072C106.056 45.3467 106.419 44.8347 106.846 44.536C107.016 44.4507 107.144 44.4507 107.23 44.536C107.358 44.6213 107.379 44.7067 107.294 44.792C107.251 44.92 107.187 45.0907 107.102 45.304C107.016 45.4747 106.952 45.6667 106.91 45.88C106.782 46.9893 107.016 47.9707 107.614 48.824C107.87 49.1653 108.168 49.4853 108.51 49.784C108.894 50.0827 109.256 50.3387 109.598 50.552C109.896 50.7227 110.259 50.8507 110.686 50.936C111.112 50.9787 111.539 51 111.966 51C112.648 51 113.31 50.9147 113.95 50.744C114.59 50.5733 115.059 50.296 115.358 49.912C115.912 49.2293 116.19 48.4613 116.19 47.608C116.19 46.968 116.019 46.2853 115.678 45.56C115.336 44.8347 114.803 44.0667 114.078 43.256C113.608 42.744 113.16 42.1893 112.734 41.592C112.307 40.9947 112.03 40.3547 111.902 39.672C111.859 39.544 111.816 39.416 111.774 39.288C111.774 39.16 111.774 39.032 111.774 38.904C111.219 39.7147 110.643 40.4827 110.046 41.208C109.491 41.8907 109 42.488 108.574 43C108.403 43.256 108.254 43.384 108.126 43.384C108.04 43.384 107.998 43.2987 107.998 43.128C107.998 42.744 108.168 42.3387 108.51 41.912C108.851 41.528 109.235 41.0587 109.661 40.504C110.088 39.9067 110.43 39.4373 110.686 39.096C111.411 38.0293 111.944 37.1973 112.286 36.6C112.67 35.96 113.075 35.384 113.502 34.872C113.971 34.3173 114.547 33.8693 115.23 33.528C115.955 33.1867 116.702 33.016 117.47 33.016C118.366 33.016 119.176 33.1653 119.902 33.464C120.67 33.72 121.075 34.4027 121.118 35.512C121.118 36.024 121.011 36.5573 120.798 37.112C120.627 37.624 120.435 38.1147 120.222 38.584C120.094 38.84 119.902 39.032 119.646 39.16C119.432 39.2453 119.326 39.2027 119.326 39.032C119.326 38.8613 119.347 38.6693 119.39 38.456C119.432 38.2427 119.454 38.0507 119.454 37.88C119.454 37.1547 119.326 36.5147 119.07 35.96C118.856 35.3627 118.536 34.936 118.11 34.68C117.683 34.3813 117.235 34.232 116.766 34.232C116.083 34.232 115.422 34.5093 114.782 35.064C114.142 35.576 113.822 36.2587 113.822 37.112C113.822 37.1973 113.822 37.304 113.822 37.432C113.822 37.56 113.843 37.6667 113.885 37.752C114.056 38.4347 114.568 39.2027 115.422 40.056C116.275 40.9093 116.936 41.656 117.406 42.296C118.216 43.4053 118.622 44.536 118.622 45.688C118.622 46.84 118.28 47.9067 117.598 48.888C116.958 49.8267 116.083 50.5733 114.974 51.128C113.907 51.7253 112.734 52.024 111.454 52.024ZM125.049 51.192C124.622 51.192 124.259 51.1067 123.961 50.936C123.662 50.7653 123.513 50.4453 123.513 49.976C123.513 49.3787 123.662 48.6747 123.961 47.864C124.302 47.0533 124.665 46.2427 125.049 45.432C125.433 44.6213 125.753 43.96 126.009 43.448C126.222 43.064 126.499 42.4667 126.841 41.656C127.225 40.8027 127.609 39.928 127.993 39.032C128.419 38.0933 128.761 37.304 129.017 36.664C129.315 36.024 129.465 35.704 129.465 35.704C129.081 36.1307 128.569 36.728 127.929 37.496C127.331 38.264 126.67 39.0747 125.945 39.928C125.262 40.7387 124.622 41.5067 124.025 42.232C123.47 42.9573 123.065 43.4907 122.809 43.832C122.681 44.0027 122.574 44.088 122.489 44.088C122.403 44.088 122.361 43.9813 122.361 43.768C122.361 43.4267 122.467 43.1067 122.681 42.808C123.193 42.168 123.811 41.4 124.536 40.504C125.262 39.5653 125.987 38.6267 126.713 37.688C127.481 36.7493 128.142 35.9173 128.697 35.192C128.355 35.192 127.907 35.2133 127.353 35.256C126.841 35.2987 126.371 35.3627 125.945 35.448C125.518 35.4907 125.283 35.512 125.241 35.512C125.027 35.512 125.049 35.3413 125.305 35C125.561 34.6587 125.902 34.3173 126.329 33.976C126.755 33.6347 127.075 33.464 127.289 33.464C127.331 33.464 127.673 33.4853 128.312 33.528C128.953 33.528 129.422 33.528 129.72 33.528C130.574 32.376 131.406 31.0533 132.217 29.56C133.07 28.0667 133.902 26.424 134.713 24.632C135.054 24.5893 135.63 24.3547 136.441 23.928C137.294 23.4587 137.955 22.9893 138.425 22.52C138.638 22.3067 138.809 22.2 138.937 22.2C139.193 22.2 139.193 22.3707 138.937 22.712C138.638 23.0533 138.126 23.7787 137.401 24.888C136.675 25.9547 135.865 27.256 134.969 28.792C134.073 30.2853 133.219 31.864 132.409 33.528H137.593C138.062 33.528 138.297 33.592 138.297 33.72C138.297 33.8907 137.977 34.0613 137.337 34.232C136.611 34.4453 135.843 34.5733 135.033 34.616C134.265 34.6587 133.539 34.744 132.857 34.872C132.217 35 131.747 35.2773 131.449 35.704C131.193 36.0027 130.83 36.6427 130.361 37.624C129.891 38.6053 129.379 39.736 128.825 41.016C128.313 42.2533 127.865 43.512 127.481 44.792C127.097 46.0293 126.862 47.0747 126.777 47.928V48.184C126.777 48.5253 126.883 48.8027 127.097 49.016C127.31 49.2293 127.523 49.336 127.737 49.336C128.291 49.336 128.995 48.9947 129.849 48.312C130.745 47.6293 131.662 46.8187 132.601 45.88C133.539 44.8987 134.35 44.0027 135.033 43.192C135.331 42.8507 135.587 42.5307 135.801 42.232C136.057 41.9333 136.206 41.7413 136.249 41.656C136.334 41.8267 136.377 41.9547 136.377 42.04C136.377 42.296 136.291 42.5733 136.121 42.872C135.993 43.1707 135.843 43.4267 135.673 43.64C134.862 44.7067 133.881 45.8373 132.729 47.032C131.577 48.184 130.339 49.1653 129.017 49.976C127.737 50.7867 126.414 51.192 125.049 51.192ZM138.824 51.512C137.075 51.512 135.859 51.1707 135.176 50.488C134.493 49.8053 134.152 48.9733 134.152 47.992C134.152 46.7547 134.472 45.432 135.112 44.024C135.795 42.616 136.435 41.4213 137.032 40.44C137.715 39.416 138.632 38.3493 139.784 37.24C140.936 36.1307 142.195 35.192 143.56 34.424C144.925 33.656 146.248 33.272 147.528 33.272C148.637 33.272 149.405 33.5493 149.832 34.104C150.259 34.616 150.472 35.2347 150.472 35.96C150.472 37.2827 150.067 38.3707 149.256 39.224C148.488 40.0773 147.528 40.7813 146.376 41.336C145.224 41.848 144.115 42.2747 143.048 42.616C142.408 42.7867 141.661 42.9573 140.808 43.128C139.955 43.2987 139.144 43.384 138.376 43.384C138.077 44.152 137.843 44.8987 137.672 45.624C137.501 46.3493 137.416 47.0107 137.416 47.608C137.416 48.3333 137.587 48.9307 137.928 49.4C138.312 49.8693 138.931 50.104 139.784 50.104C140.125 50.104 140.531 50.0613 141 49.976C141.469 49.8907 141.981 49.7627 142.536 49.592C143.816 49.1653 145.075 48.4827 146.312 47.544C147.549 46.6053 148.68 45.6027 149.704 44.536C150.771 43.4267 151.581 42.5093 152.136 41.784C152.264 41.912 152.328 42.0613 152.328 42.232C152.328 42.4453 152.179 42.7867 151.88 43.256C151.027 44.4507 149.917 45.688 148.552 46.968C147.187 48.248 145.672 49.336 144.008 50.232C142.344 51.0853 140.616 51.512 138.824 51.512ZM138.888 42.104C139.443 42.1467 140.061 42.1467 140.744 42.104C141.469 42.0187 142.173 41.8693 142.856 41.656C144.605 41.144 145.864 40.3333 146.632 39.224C147.443 38.072 147.848 37.048 147.848 36.152C147.848 35.64 147.741 35.2133 147.528 34.872C147.315 34.5307 146.973 34.36 146.504 34.36C145.267 34.36 144.157 34.8293 143.176 35.768C142.195 36.664 141.341 37.7093 140.616 38.904C139.891 40.0987 139.315 41.1653 138.888 42.104ZM151.498 51.896C151.327 51.896 151.327 51.7253 151.498 51.384C151.711 51 151.903 50.5733 152.074 50.104C152.287 49.6347 152.5 49.1227 152.714 48.568C153.14 47.544 153.61 46.392 154.122 45.112C154.634 43.832 155.124 42.5947 155.594 41.4C156.063 40.1627 156.468 39.1173 156.81 38.264C157.194 37.368 157.45 36.792 157.578 36.536C156.98 37.176 156.255 37.9867 155.402 38.968C154.591 39.9067 153.823 40.824 153.098 41.72C152.372 42.616 151.818 43.32 151.434 43.832C151.306 44.0027 151.199 44.088 151.114 44.088C151.028 44.088 150.986 43.9813 150.986 43.768C150.986 43.4267 151.092 43.1067 151.306 42.808C152.116 41.784 153.012 40.632 153.994 39.352C155.018 38.072 155.935 36.8987 156.746 35.832C157.556 34.7227 158.068 33.9973 158.282 33.656C158.751 33.5707 159.434 33.4427 160.33 33.272C161.268 33.1013 161.908 32.8667 162.25 32.568C162.378 32.44 162.506 32.376 162.634 32.376C162.719 32.376 162.762 32.4613 162.762 32.632C162.804 32.76 162.762 32.9093 162.634 33.08C162.378 33.336 161.994 33.8907 161.482 34.744C161.012 35.5973 160.479 36.5787 159.882 37.688C159.284 38.7973 158.708 39.864 158.154 40.888C158.58 40.248 159.135 39.5013 159.818 38.648C160.543 37.752 161.332 36.8987 162.186 36.088C163.039 35.2347 163.892 34.5307 164.746 33.976C165.642 33.4213 166.474 33.144 167.242 33.144C167.796 33.144 168.266 33.272 168.65 33.528C169.034 33.7413 169.332 34.1467 169.546 34.744C169.674 35.0427 169.738 35.384 169.738 35.768C169.738 36.4933 169.546 37.1973 169.162 37.88C168.82 38.52 168.564 39.0107 168.394 39.352C168.351 39.48 168.202 39.608 167.946 39.736C167.69 39.8213 167.583 39.7787 167.626 39.608C167.668 39.3947 167.69 39.1813 167.69 38.968C167.732 38.7547 167.753 38.52 167.753 38.264C167.753 37.5387 167.604 36.8773 167.306 36.28C167.05 35.6827 166.559 35.384 165.833 35.384C165.151 35.384 164.319 35.8107 163.338 36.664C162.356 37.5173 161.375 38.4987 160.394 39.608C159.156 41.0587 158.175 42.4453 157.45 43.768C156.724 45.048 156.127 46.3067 155.658 47.544C155.402 48.2267 155.146 48.9093 154.89 49.592C154.634 50.232 154.442 50.744 154.314 51.128C153.759 51.1707 153.204 51.2987 152.65 51.512C152.095 51.768 151.711 51.896 151.498 51.896ZM161.959 73.4C160.338 73.4 158.78 73.016 157.287 72.248C155.751 71.5227 154.62 70.392 153.895 68.856C153.639 68.3013 153.468 67.704 153.383 67.064C153.298 66.4667 153.255 65.8693 153.255 65.272V64.568C153.255 64.2267 153.298 63.9067 153.383 63.608C153.468 63.352 153.682 63.224 154.023 63.224C154.108 63.224 154.151 63.2667 154.151 63.352C154.151 63.608 154.13 63.864 154.087 64.12C154.044 64.376 154.023 64.6533 154.023 64.952C154.023 66.9147 154.663 68.408 155.943 69.432C157.18 70.456 158.738 70.968 160.615 70.968C161.383 70.968 162.172 70.8827 162.983 70.712C163.794 70.5413 164.562 70.3067 165.287 70.008C167.975 68.856 170.3 67.2133 172.263 65.08C174.268 62.9893 176.018 60.6213 177.511 57.976C179.004 55.3307 180.348 52.6427 181.543 49.912C182.226 48.2907 182.823 46.712 183.335 45.176C183.89 43.64 184.38 42.2533 184.807 41.016C184.38 41.6133 183.826 42.3387 183.143 43.192C182.46 44.0453 181.778 44.8773 181.095 45.688C180.412 46.456 179.815 47.0747 179.303 47.544C178.236 48.568 177.084 49.4427 175.847 50.168C174.652 50.8507 173.415 51.192 172.135 51.192C171.708 51.192 171.346 51.1067 171.047 50.936C170.748 50.7653 170.599 50.4453 170.599 49.976C170.599 49.3787 170.748 48.6747 171.047 47.864C171.388 47.0533 171.751 46.2427 172.135 45.432C172.519 44.6213 172.839 43.96 173.095 43.448C173.607 42.4667 174.098 41.4853 174.567 40.504C175.036 39.5227 175.442 38.6907 175.783 38.008C176.124 37.368 176.295 36.9413 176.295 36.728C176.295 36.3867 176.039 36.3867 175.527 36.728C175.058 37.0693 174.61 37.4107 174.183 37.752C173.244 38.648 172.263 39.7147 171.239 40.952C170.215 42.1467 169.426 43.1067 168.871 43.832C168.743 44.0027 168.636 44.088 168.551 44.088C168.466 44.088 168.423 43.9813 168.423 43.768C168.423 43.4267 168.53 43.1067 168.743 42.808C169.34 41.9547 170.044 41.016 170.855 39.992C171.666 38.968 172.498 37.9867 173.351 37.048C174.162 36.1947 174.994 35.3627 175.847 34.552C176.7 33.7413 177.788 33.336 179.111 33.336C180.007 33.336 180.455 33.6773 180.455 34.36C180.455 34.9573 180.199 35.64 179.687 36.408C179.388 36.8773 178.919 37.6667 178.279 38.776C177.639 39.8853 176.978 41.1013 176.295 42.424C175.655 43.704 175.1 44.8987 174.631 46.008C174.162 47.1173 173.927 47.928 173.927 48.44C173.927 49.0373 174.226 49.336 174.823 49.336C175.292 49.336 175.868 49.1013 176.551 48.632C177.234 48.12 177.938 47.5227 178.663 46.84C179.9 45.6453 181.031 44.3227 182.055 42.872C183.122 41.4213 184.039 40.0347 184.807 38.712C184.935 38.4987 185.148 38.1147 185.447 37.56C185.788 37.0053 186.13 36.472 186.471 35.96C186.855 35.448 187.154 35.1493 187.367 35.064C187.58 34.9787 188.007 34.744 188.647 34.36C189.287 33.976 189.927 33.72 190.567 33.592C191.164 33.464 191.612 33.4 191.911 33.4C192.38 33.4 192.615 33.528 192.615 33.784C192.615 34.1253 192.423 34.296 192.039 34.296C191.57 34.296 191.143 34.424 190.759 34.68C190.375 34.8933 190.076 35.1707 189.863 35.512C189.479 36.0667 188.924 37.0693 188.199 38.52C187.516 39.9707 186.748 41.656 185.895 43.576C185.084 45.4533 184.274 47.3733 183.463 49.336C182.652 51.256 181.906 53.0267 181.223 54.648C180.199 57.08 179.026 59.448 177.703 61.752C176.38 64.0987 174.823 66.1893 173.031 68.024C171.282 69.9013 169.191 71.3733 166.759 72.44C165.308 73.08 163.708 73.4 161.959 73.4Z" fill={color}/>
    <path d="M29.0599 41.219C25.2359 43.286 20.8449 44.3321 16.0816 40.0298C12.9355 37.1882 7.67814 38.5041 8.81283 42.5889C11.4284 52.0045 23.1972 65.0562 33.5662 58.2276C38.631 54.8921 40.8408 50.9041 41.5218 47.2272C42.8876 39.8532 35.6573 37.6529 29.0599 41.219Z" fill={color}/>
    <path d="M31.4025 37.0506C35.1889 26.2784 39.5244 31.4193 40.3788 32.5949C40.4841 32.7399 40.5684 32.884 40.6615 33.0372C42.0955 35.3983 51.6097 50.1716 36.761 58.3164C29.9095 62.0746 24.0894 60.8034 19.506 57.6369C13.4753 53.4706 19.8965 46.5947 26.3389 43.0983C28.5323 41.9079 30.365 40.0022 31.4025 37.0506Z" fill={color}/>
    <path d="M13.6846 21.836C14.4267 22.5474 14.2196 22.9411 13.8008 23.3779C13.644 23.5415 13.0264 23.815 12.4224 24.0316C11.2654 24.4465 11.1395 22.7285 11.9901 21.8412C12.4089 21.4043 12.9425 21.1245 13.6846 21.836Z" fill={color}/>
    <path d="M9.92446 26.9222C14.4155 25.3162 10.6425 32.44 8.60428 36.7521C7.15837 39.8112 6.14356 30.8379 8.2777 28.2122C8.71829 27.6701 9.22383 27.2305 9.77594 26.9824C9.82809 26.959 9.87753 26.939 9.92446 26.9222Z" fill={color}/>
    </svg>
    
  );
};

export default Logo;
