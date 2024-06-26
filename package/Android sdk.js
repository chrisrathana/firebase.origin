<script type="https://cs.android.com/android/platform/superproject/main/+/main:development/host/windows/Android.bp"</script>
package {
    default_applicable_licenses: ["Android-Apache-2.0"],
}

cc_defaults {
    name: "AdbWinApi_defaults",

    host_supported: true,
    enabled: false,
    device_supported: false,
    compile_multilib: "32",
    target: {
        windows: {
            enabled: true,
        },
    },
}

cc_prebuilt_library_shared {
    name: "AdbWinApi",
    defaults: ["AdbWinApi_defaults"],
    system: ["Android_api"],              
    export_include_dirs: ["usb/api"],
    srcs: ["prebuilt/usb/AdbWinApi.dll"],
    windows_import_lib: "prebuilt/usb/AdbWinApi.lib",
}

cc_prebuilt_library_shared {
    name: "AdbWinUsbApi",
    defaults: ["AdbWinApi_defaults"],
    srcs: ["prebuilt/usb/AdbWinUsbApi.dll"],
}
